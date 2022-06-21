$(document).ready(function() {
    //updateTRXUSDTPrice();

    let req_uri = String(window.location.pathname).toLowerCase().split('/');
    /*console.log(req_uri);
    if(req_uri.indexOf('join') !== -1) {
        $("#signUpModal").modal("show");
    }
    else if(req_uri.indexOf('login') !== -1) {
        $("#loginModal").modal("show");
    }*/

    function displayTRXPrices(ret = false) {
        let price = parseFloat(Cookies.get("USDT_TRX"));
        let amount = parseFloat((100 * price).toFixed(6));
        if (ret) {
            return amount;
        } else {
            $("#price-in-trx").text(amount);
        }
    }

    if ($("#price-in-trx").length) {
        if (typeof Cookies.get("USDT_TRX") === 'undefined') {
            let interval = setInterval(function() {
                if (typeof Cookies.get("USDT_TRX") !== 'undefined') {
                    clearInterval(interval);
                    displayTRXPrices();
                }
            }, 100);
        } else {
            displayTRXPrices();
        }
    }

    $(document).on("click", ".join-with-usdt", async function() {
        //_alert('We are coming up with new cXP features. System is in upgrade mode, all joining and upgrade will be open on 15th evening.');
        //return false;

        if (hasTron()) {
            let amount = parseInt($("input[name='amount']").val());

            if (amount < 100) {
                _alert('Min. 100 USD investment');
                return false;
            }

            if (amount % 100 !== 0) {
                _alert('Only multiple of 100 is allowed!');
                return false;
            }


            let contract = await fetchContract(TOKEN_ADDRESS);
            let user_address = getWallet();
            let balance = Number(await contract.balanceOf(user_address).call());
            balance = balance / 1e6;
            console.log(balance);
            if (balance >= amount) {
                $("#usdt_amount").text(amount);
                $("#approval_amount").val(amount);
                $(".modal").modal("hide");
                $("#USDTModal").modal("show");
            } else {
                _alert('Insufficient balance to make transaction');
            }
        } else {
            _alert('No Tron Wallet Connected');
        }
        return false;
    });

    $(document).on("click", ".btn-approve", async function() {
        let allowance = await fetchAllowance(TOKEN_ADDRESS);
        let $statusBox = $("#approval-status");
        let _amount = parseInt($("#approval_amount").val());
        _amount = _amount < 50 ? 50 : _amount;

        if (allowance >= _amount) {
            $statusBox.text("APPROVED for " + allowance + " USDT");
        } else {
            $statusBox.text("PROCESSING...");
            try {
                let contract = await fetchContract(TOKEN_ADDRESS);
                _amount = _amount * 1e6;
                let tx = await contract.approve(CONTRACT_ADDRESS, _amount).send({
                    from: getWallet()
                });
                if (tx) {
                    setTimeout(async function() {
                        allowance = await fetchAllowance(TOKEN_ADDRESS);
                        if (allowance >= 50) {
                            $statusBox.text("APPROVED for " + allowance + " USDT");
                        }
                    }, 3000);
                } else {
                    $statusBox.text('FAILED');
                }
            } catch (e) {
                console.error(e);
                $statusBox.text('FAILED');
            }
        }
        return false;
    });

    function _pending_register(tx, referral_code) {
        $.ajax({
            url: API_URL + "pending",
            type: "POST",
            data: {
                tx: tx,
                referral_code: referral_code
            },
            success: function(res) {
                console.log(res);
            },
            error: function(e) {
                console.log(e);
            }
        });
    }

    async function _register(data) {
        _pending_register(data['tx_hash'], data.referral_code);
        fetchTxStatus(data['tx_hash'], function(r) {
            if (!r) {
                _alert("Transaction Failed!");
                return false;
            }

            $.ajax({
                url: API_URL + "register",
                type: "POST",
                data: data,
                success: function(res) {
                    if (res.status) {
                        Cookies.set("SD_Address", getWallet(), {
                            expires: 7 * 24 * 3600 * 1000
                        });
                        window.location.href = BASE_URL + "dashboard";
                    } else {
                        _alert('Failed to create account.');
                    }
                },
                error: function(e) {
                    console.error(e);
                    _alert('Some unknown error occurred.', 'error');
                }
            });
        });
    }

    async function joinWithTRX(obj) {
        if (hasTron()) {
            try {
                let contract = await getTronWeb().trx;
                let price = parseFloat(Cookies.get("USDT_TRX"));
                let _amount = obj.amount;

                let tx = await contract.sendTransaction(CONTRACT_ADDRESS, _amount).send({
                    from: getWallet(),
                    callValue: _amount,
                    feeLimit: FEE_LIMIT
                });

                if (tx && tx.length === 64) {
                    let data = {
                        tx_hash: tx,
                        address: getWallet(),
                        amount: _amount,
                        ticker: "TRX",
                        price: price,
                        sponsor: obj.sponsor,
                        referral_code: obj.referral_code,
                    };
                    _alert('Please wait. Do not close or refresh this page. Verifying transaction. It may take 30-40 seconds...', 'success', 60000);
                    await _register(data);

                } else {
                    _alert('Transaction Failed!');
                }
            } catch (e) {
                console.error(e);
                _alert('Transaction rejected!');
            }
        }
    }

    async function joinWithTRC20(obj) {
        try {
            let contract = await fetchContract(TOKEN_ADDRESS);
            let tx = await contract.transfer(CONTRACT_ADDRESS, parseInt((obj.amount * 1e6).toFixed(0))).send({
                from: getWallet(),
                feeLimit: FEE_LIMIT
            });

            if (tx && tx.length === 64) {
                let data = {
                    tx_hash: tx,
                    address: getWallet(),
                    amount: obj.amount,
                    ticker: "USDT",
                    price: 1,
                    sponsor: obj.sponsor,
                    referral_code: obj.referral_code,
                };
                _alert('Please wait. Do not close or refresh this page. Verifying transaction. It may take 30-40 seconds...', 'success', 60000);
                await _register(data);

            } else {
                _alert('Transaction Rejected!');
            }
        } catch (e) {
            console.error(e);
            _alert();
        }
    }

    $(document).on("click", ".btn-join", async function() {
        if (!hasTron()) {
            _alert('No Tron Wallet found. Install or check your TronPocket or TronLink!');
            return false;
        }
        let pay = $(this).data("pay");
        let ref = String($("input[name='referral_code']").val()).trim();
        let amount = parseInt($("input[name='amount']").val());
        if (amount < 100) {
            _alert('Min. $100 investment required.');
            return false;
        }

        if (amount % 100 !== 0) {
            _alert('Amount should in multiple of 100');
            return false;
        }
        //amount *= 1e6;
        if (pay === 'TRX') {
            let price = parseFloat(Cookies.get("USDT_TRX"));
            amount = parseInt((price * amount * 1e6).toFixed(6));
            let trx_balance = await window.tronWeb.trx.getBalance(getWallet());
            if (trx_balance < amount) {
                _alert("Insufficient balance!");
                return false;
            }

        } else {
            let allowance = await fetchAllowance(TOKEN_ADDRESS);
            if (allowance < amount) {
                _alert("Click approve before doing transaction");
                return false;
            }
        }

        if (isNaN(amount)) {
            _alert('TRX to USDT price expired. Refresh the page and try again!');
            return false;
        }

        if (ref.length === 0) {
            _alert('Provided a referral code');
            return false;
        }

        $.ajax({
            url: API_URL + "verify_referral",
            type: "GET",
            data: {
                ref: ref
            },
            success: function(res) {
                if (res.status) {
                    $.ajax({
                        url: API_URL + "validate",
                        type: "POST",
                        data: {
                            address: getWallet(),
                            referral_code: ref,
                            pack: 1,
                            amount: amount
                        },
                        success: function(res) {
                            if (res.status) {
                                let data = res.data;
                                data['amount'] = amount;
                                data['referral_code'] = ref;
                                if (pay === 'TRX') {
                                    joinWithTRX(data);
                                } else {
                                    joinWithTRC20(data);
                                }
                            } else {
                                _alert(res.message);
                            }
                        },
                        error: function(e) {
                            console.error(e);
                            _alert();
                        }
                    });
                } else {
                    _alert(res.message);
                }
            },
            error: function(e) {
                console.log(e);
                _alert();
            }
        });
    });

    $(document).on("click", ".btn-login", function() {
        $.ajax({
            url: API_URL + "address",
            type: "GET",
            data: {
                address: getWallet()
            },
            success: function(res) {
                if (res.status) {
                    Cookies.set("CXP_wallet", getWallet(), {
                        expires: 7 * 24 * 3600 * 1000
                    });
                    window.location.href = BASE_URL + "dashboard";
                } else {
                    _alert("Address not register with us. For new joining, please wait 10 mins and try login again!");
                }
            },
            error: function(e) {
                console.error(e);
                _alert();
            }
        })
        return false;
    });


    $(document).on("submit", "#LoginFormAddress", function() {
        let address = String($("input[name='address']", $(this)).val()).trim();
        $.ajax({
            url: API_URL + "address",
            type: "GET",
            data: {
                address: address
            },
            success: function(res) {
                if (res.status) {
                    Cookies.set("CXP_wallet", address, {
                        expires: 7 * 24 * 3600 * 1000
                    });
                    window.location.href = BASE_URL + "dashboard";
                } else {
                    _alert("Address is not registered with us.");
                }
            },
            error: function(e) {
                console.error(e);
                _alert();
            }
        });
        return false;
    });

});