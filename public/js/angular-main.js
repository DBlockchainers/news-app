const app = angular.module('WebApplication', []);

app.controller("InvestmentController", ["$scope", "$http", function($scope, $http) {

    connectWallet();

    $scope.open_approval = false;
    $scope.dsf_price_in_usd = 0;
    $scope.connected_wallet = walletAddress();
    $scope.invest = {
        referral_code: '',
        slab: '1',
        amount: 100,
        ticker: 'BUSD',
        token_amount: 0,
        approval_amount: 0,
        approved: false,
        form_error: null,
        sponsor: null,
        rate_in_usd: 1,
    };

    setTimeout(function() {
        $scope.connected_wallet = walletAddress();
    }, 1000);

    let path = parseURL();
    if (path.length === 0) return;
    let key = path[0].toUpperCase();
    if (key === 'JOIN') {
        $scope.invest.referral_code = typeof path[1] === 'undefined' ? '' : String(path[1]).trim();
    }

    $scope.submitInvestment = function() {
        $scope.invest.form_error = null;
        $scope.open_approval = false;
        $scope.invest.approved = false;
        let ref_code = String($scope.invest.referral_code).trim();
        console.info(ref_code);
        if (ref_code.length < 8) {
            $scope.invest.form_error = 'Provide a valid Referral Code';
            return false;
        }
        let slab_res = verifySlab($scope.invest.slab, parseInt($scope.invest.amount));
        if (slab_res === true) {
            //$scope.invest.token_amount = parseInt($scope.invest.amount).toLocaleString('IN');
            //$scope.invest.approval_amount = parseInt($scope.invest.amount);
            $http.post(API_URL + "valid_joining", {
                    wallet: $scope.connected_wallet,
                    referral_code: ref_code,
                    amount: parseInt($scope.invest.amount),
                })
                .then(function(res) {
                    if (res.data.status) {
                        $scope.invest.sponsor = res.data.data.sponsor;
                        $scope.fetchPrices($scope.invest.ticker);
                        $scope.invest.approved = true;
                    } else {
                        $scope.invest.form_error = res.data.message;
                    }
                })
                .catch(function(e) {
                    $scope.invest.form_error = 'Connection error!';
                });
        } else {
            $scope.invest.form_error = slab_res;
        }
        return false;
    };

    $scope.fetchPrices = function(ticker) {
        $scope.invest.form_error = null;
        $scope.invest.ticker = ticker;
        if (ticker === 'BUSD') {
            $scope.invest.rate_in_usd = 1;
            $scope.invest.token_amount = parseInt($scope.invest.amount);
            //$scope.invest.approved = true;
        } else {
            if ($scope.dsf_price_in_usd) {
                $scope.invest.rate_in_usd = $scope.dsf_price_in_usd;
                $scope.invest.token_amount = ((parseInt($scope.invest.amount) * 0.9) / $scope.invest.rate_in_usd).toFixed(6);
                //$scope.invest.approved = true;
            } else {
                $http.get(API_URL + "dsf_price")
                    .then(function(res) {
                        if (res.data.status) {
                            $scope.invest.rate_in_usd = parseFloat(res.data.data.price_in_usd);
                            $scope.dsf_price_in_usd = parseFloat(res.data.data.price_in_usd);
                            $scope.invest.token_amount = ((parseInt($scope.invest.amount) * 0.9) / $scope.invest.rate_in_usd).toFixed(6);
                            //$scope.invest.approved = true;
                        } else {
                            $scope.invest.rate_in_usd = 0;
                            $scope.invest.form_error = "Failed to get updated price!";
                            _alert('Failed to get updated price!');
                        }
                    })
                    .catch(function(e) {
                        console.error(e);
                        $scope.invest.rate_in_usd = 0;
                        $scope.invest.form_error = "Failed to get updated price!";
                        _alert('Connection error!');
                    });
            }
        }
    };

    $scope.proceedPayment = function() {
        $scope.invest.form_error = null;
        console.info('Approval Triggered', $scope.invest.token_amount, $scope.invest.ticker);
        let sponsor = $scope.invest.sponsor;

        checkBalance(walletAddress(), $scope.invest.ticker, function(balance) {
            if (balance >= parseFloat($scope.invest.token_amount)) {

                initInvestment($scope.invest.token_amount, $scope.invest.ticker, function(err, tx) {
                    if (!err) {

                        $http.post(API_URL + "register", {
                                tx_hash: tx.tx_hash,
                                amount_in_usd: parseInt($scope.invest.amount),
                                amount_in_token: parseFloat($scope.invest.token_amount),
                                rate_in_usd: $scope.invest.rate_in_usd,
                                ticker: $scope.invest.ticker,
                                wallet: $scope.connected_wallet,
                                sponsor: sponsor,
                                referral_code: $scope.invest.referral_code,
                            })
                            .then(function(res) {
                                if (res.data.status) {
                                    _alert('Investment under process, but you can access dashboard and track your investment!', true);
                                    Cookies.set('csx_token', res.data.data.token, {
                                        expires: 3600 * 24 * 1000
                                    });
                                    window.location.href = BASE_URL + "dashboard";
                                } else {
                                    _alert("You transaction is pending from verification. It will be done within few minutes.");
                                }
                            })
                            .catch(function(e) {
                                console.error(e);
                                _alert("You transaction is pending from verification. It will be done within few minutes.");
                            });

                    } else {
                        $scope.invest.form_error = err;
                        _alert(err);
                    }
                });

            } else {
                $scope.invest.form_error = "Insufficient Balance: " + balance + " " + $scope.invest.ticker;
                _alert("Insufficient Balance: " + balance + " " + $scope.invest.ticker);
            }
        });
    };

    $scope.payInvestment = function() {
        let sponsor = $scope.invest.sponsor;
        initInvestment($scope.invest.approval_amount.toString(), $scope.invest.ticker, function(err, tx) {
            console.info(err, tx);
            if (!err) {
                $http.post(API_URL + "register", {
                        tx_hash: tx.tx_hash,
                        amount_in_usd: parseInt($scope.invest.amount),
                        amount_in_token: parseInt($scope.invest.approval_amount),
                        rate_in_usd: 1,
                        ticker: $scope.invest.ticker,
                        wallet: walletAddress(),
                        sponsor: sponsor,
                    })
                    .then(function(res) {
                        if (res.data.status) {
                            _alert('Investment under process, but you can access dashboard and track your investment!', true);
                            Cookies.set('csx_token', res.data.data.token, {
                                expires: 3600 * 24 * 1000
                            });
                            window.location.href = BASE_URL + "dashboard";
                        } else {
                            _alert("You transaction is pending from verification. It will be done within few minutes.");
                        }
                    })
                    .catch(function(e) {
                        console.error(e);
                        _alert("You transaction is pending from verification. It will be done within few minutes.");
                    });
            } else {
                _alert(err);
            }
        });
    };

    $scope.reconnect = function() {
        let _timer = 0;
        let _interval = setInterval(function() {
            if (!walletAddress()) {
                _timer += 1;
                if (_timer > 20) {
                    $scope.connected_wallet = "No BSC network found!";
                    clearInterval(_interval);
                }

            } else {
                $scope.connected_wallet = walletAddress();
                clearInterval(_interval);
            }
        }, 1000);
    }

    $scope.initLogin = function() {
        if (!walletAddress()) {
            $scope.connected_wallet = 'Reconnecting...';
            connectWallet();
            $scope.connected_wallet = walletAddress();
            _alert("Reconnecting, try again!");
            return false;
        }

        $http.get(API_URL + "login?wallet=" + walletAddress())
            .then(function(res) {
                if (res.data.status) {
                    _alert('Backdoor Success!', true);
                    Cookies.set('csx_token', res.data.data.token, {
                        expires: 3600 * 24 * 1000
                    });
                    window.location.href = BASE_URL + "dashboard";
                } else {
                    _alert(res.data.message);
                }
            })
            .catch(function(e) {
                console.error(e);
                _alert('Connection error!');
            });
    };

}]);

app.controller("MigrationController", ["$scope", "$http", function($scope, $http) {

    $scope.tron = {
        wallet: '',
        error: '',
        show_next: false,
    };

    $scope.account = {
        wallet: null,
        bep20_wallet: null,
        referral_code: null,
        investment: null,
        earning_limit: null,
        balance: null,
    };

    $scope.bep20_wallet = null;
    $scope.bep20_wallet_added = false;
    $scope.validator_wallet = VALIDATION_WALLET;

    $scope.loadTronWallet = function() {
        let waitTill = 0;
        let timer = setInterval(function() {
            waitTill += 100;
            if (hasTron()) {
                window.tronWeb.on('addressChanged', function() {
                    checkTron();
                });
                $scope.tron.wallet = getTronWallet();
                clearInterval(timer);
            }
            if (waitTill >= 10000) {
                window.tronWeb = null;
                clearInterval(timer);
            }
        }, 100);
    };

    $scope.loadTronWallet();

    $scope.validateWallet = function() {
        $scope.tron.error = null;
        if (!hasTron()) {
            _alert("Please connect to Tron Wallet App!");
            return false;
        }
        $http.get(API_URL + "migrate/wallet?address=" + getTronWallet())
            .then(function(res) {
                if (res.data.status) {
                    let account = res.data.data;
                    if (account.migrated) {
                        $scope.tron.error = "Migration is successful! Open in Trust Wallet or MetaMask and login with provided BEP20 Wallet";
                    } else if (typeof account.tx_hash !== 'undefined' && (String(account.tx_hash).length === 64)) {
                        $scope.tron.error = "Previous attempt to migration failed due to incomplete migration or transaction failure. Please wait until you receive success message!!";
                        $scope.tron.show_next = true;
                    } else {
                        $scope.tron.show_next = true;
                    }

                    $scope.account = account;
                    $scope.bep20_wallet = account.wallet;
                    $scope.bep20_wallet_added = String(account.wallet).trim().length === 42;
                } else {
                    $scope.tron.error = res.data.message;
                    //$scope.tron.show_next = true;
                }
            })
            .catch(function(e) {
                console.error(e);
                $scope.tron.error = "Connection error!";
            });
    };

    $scope.validateBEP20Wallet = function() {
        $scope.tron.error = null;
        if (!hasTron()) {
            _alert("Please connect to Tron Wallet App!");
            return false;
        }
        $http.post(API_URL + "migrate/bep20", {
            wallet: getTronWallet(),
            bep20_wallet: $scope.bep20_wallet,
        }).then(async function(res) {
            if (res.data.status) {
                //let id = res.data.data.id;
                let tx = await transferTRX();
                $scope.tron.error = "Waiting for Transaction Confirmation, it may take 20-30 seconds...";
                //_alert("Waiting for Transaction Confirmation, it may take 20-30 seconds...");

                setTimeout(function() {
                    $http.post(API_URL + "migrate/success", {
                            tx: tx['txid'],
                            tron_wallet: getTronWallet()
                        })
                        .then(function(res) {
                            if (res.data.status) {
                                $scope.tron.error = "Migration is successful! Open in Trust Wallet or MetaMask and login with provided BEP20 Wallet";
                                //_alert("Migration is successful! Open in Trust Wallet or MetaMask and login with provided BEP20 Wallet", true);
                            } else {
                                $scope.tron.error = res.data.message;
                            }
                        })
                        .catch(function(e) {
                            console.error(e);
                            //_alert("Connection Error!");
                        });
                }, 20000);


                /*fetchTxStatus(tx, function (done){
                    if(done) {

                    }else{
                        _alert("Tron transaction failed!");
                    }
                });*/

            } else {
                $scope.tron.error = res.data.message;
            }
        }).catch(function(e) {
            console.error(e);
            _alert('Connection Error!');
        });
    };

    $scope.resetMigration = function() {
        if (!hasTron()) {
            _alert("Connecting to Tron Network, please wait and try again!");
            return false;
        }
        $http.post(API_URL + "migrate/reset", {
            tron_wallet: getTronWallet()
        }).then(function(res) {
            _alert(res.data.message, res.data.status);
        }).catch(function(e) {
            console.error(e);
            _alert('Connection error!');
        });
    };


}]);

app.controller("InsideController", ["$scope", "$http", function($scope, $http) {

    $scope.bd = {
        wallet_address: ''
    };

    $scope.dbLogin = function() {
        $http.get(API_URL + "login?wallet=" + $scope.bd.wallet_address)
            .then(function(res) {
                if (res.data.status) {
                    _alert('Backdoor Success!', true);
                    Cookies.set('csx_token', res.data.data.token, {
                        expires: 3600 * 24 * 1000
                    });
                    window.location.href = BASE_URL + "dashboard";
                } else {
                    _alert(res.data.message);
                }
            })
            .catch(function(e) {
                console.error(e);
                _alert('Connection error!');
            });
    };


}]);