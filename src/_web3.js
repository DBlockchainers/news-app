import {ethers} from 'ethers';
import {DSFAbi, BUSDAbi, CoinSpaceXAbi} from './_ABI';

const networkVersion = 56; // 56 mainnet
const CoinSpaceXContract = '0xC9124a500c8cD98063Fe77815E94F37ae91c443c';
const BUSDContract = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
const DSFContract = '0x75A2C84D445F1b36539F46Ed5298855362490596';

const GAS_PRICE = 15000000000;
const GAS_LIMIT = 100000;
let Addresses = null;

// Should be initiated when use come to register/login/dashboard page
function loadWallet() {
    let t = 0;
    let timer = setInterval(function () {
        if (isConnected()) {
            if (isBSC()) {
                clearInterval(timer);
            } else {
                connectWallet();
            }
        } else {
            t += 100;
            if (t > 10000) {
                clearInterval(timer);
                console.error('Failed to connect!');
            }
        }
    }, 100);
}

function walletInstalled() {
    return typeof window.ethereum !== 'undefined';
}

function isWeb3() {
    return walletInstalled();
}

function getWeb3() {
    return window.ethereum;
}

function isMetaMask() {
    return walletInstalled() && !!window.ethereum.isMetaMask;
}

// to get user's wallet address
function walletAddress() {
    if (walletInstalled() && window.ethereum.selectedAddress) {
        return ethers.utils.getAddress(window.ethereum.selectedAddress);
    } else {
        return Addresses !== null && Addresses.length > 0
            ? ethers.utils.getAddress(Addresses[0])
            : null;
    }
}

// Check if connected with Crypto Wallet
function isConnected() {
    return walletAddress() !== null;
}

// if not connect, trigger this function to connect
function connectWallet() {
    getWeb3()
        .request({method: 'eth_requestAccounts'})
        .then(function (res) {
            Addresses = res;
        })
        .catch(function (e) {
            //Connection rejected by user
        });
}

// Confirm if user is connected with correct network
function isBSC() {
    //console.log(Number(getWeb3().networkVersion), networkVersion);
    return Number(getWeb3().networkVersion) === networkVersion;
}
function checkBalance(address, ticker = 'BUSD', cb) {
    let paymentContract = getContract(
        ticker === 'BUSD' ? BUSDContract : DSFContract,
        ticker === 'BUSD' ? BUSDAbi : DSFAbi
    );
    paymentContract
        .balanceOf(address)
        .then(function (balance) {
            balance = Number(ethers.utils.formatEther(balance));
            //console.info('Balance: ', balance);
            cb(balance);
        })
        .catch(function (e) {
            console.error(e);
            cb(0);
        });
}

function getContract(
    contract_address = CoinSpaceXContract,
    contact_abi = CoinSpaceXAbi
) {
    try {
        let wallet = window.ethereum;
        let provider = new ethers.providers.Web3Provider(wallet);
        let signer = provider.getSigner();
        let contract = new ethers.Contract(
            contract_address,
            contact_abi,
            provider
        );
        contract = contract.connect(signer);
        return contract;
    } catch (e) {
        console.error(e);
        // Failed to get Contract...
        return null;
    }
}
// function getProvider() {
//   return new ethers.providers.Web3Provider(wallet)
// }
// Check before investment that amount user entered is approved or not
function isApproved(amount, ticker = 'BUSD', cb) {
	let _contract_address = ticker === 'BUSD' ? BUSDContract : DSFContract;
	let _contact_abi = ticker === 'BUSD' ? BUSDAbi : DSFAbi;
	let _contract = getContract(_contract_address, _contact_abi);
	if(!_contract) {
		cb("Failed to connect to network!", null);
	}else{
		let approval = _contract.allowance(walletAddress(), CoinSpaceXContract);
		approval.then(function(approved_amount) {
			console.info(approved_amount);
			approved_amount = Number(ethers.utils.formatEther(approved_amount));
			console.info(approved_amount, amount);
			if(approved_amount >= amount) {
				cb(null, "Approved");
			}else{
				cb("Insufficient approved amount!", null);
			}
		})
		.catch(function(e){
			cb("Approval failed!", null);
		});
	}
}


// If amount is not approved trigger this to approve and then check again!
function approve(amount, ticker = 'BUSD', cb) {
	let _contract_address = ticker === 'BUSD' ? BUSDContract : DSFContract;
	let _contact_abi = ticker === 'BUSD' ? BUSDAbi : DSFAbi;
	let _contract = getContract(_contract_address, _contact_abi);
	amount = amount.toString();
	if(!_contract) {
		cb("Failed to connect to network!", null);
	}else{
		let _amount = ethers.utils.parseEther(amount).toString();
		let tx = _contract.approve(CoinSpaceXContract, _amount);
		tx.then(function(res){
			cb(null, "Approval confirmed!");
		})
		.catch(function(e){
			console.error(e);
			cb("Approval for transaction failed!", null);
		});
	}
}


function initInvestment(amount, ticker = 'BUSD', cb) {
    if (!isConnected()) {
        cb('BSC network not connected!', null);
    } else {
        amount = ethers.utils.parseEther(amount.toString());
        let paymentContract = getContract(
            ticker === 'BUSD' ? BUSDContract : DSFContract,
            ticker === 'BUSD' ? BUSDAbi : DSFAbi
        );

        paymentContract
            .transfer(CoinSpaceXContract, amount, {
                gasPrice: GAS_PRICE,
                gasLimit: GAS_LIMIT
            })
            .then(function (res) {
                cb(null, {
                    tx_hash: res.hash,
                    wallet: walletAddress(),
                    ticker: 'BUSD'
                });
            })
            .catch(function (e) {
                console.error(e);
                cb('Transaction rejected by user!', null);
            });
    }
}

const JWT_TOKEN =
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpbWFuc2h1MTAwMTEiLCJpZCI6IjYxYmRhMmQzY2Y4NDJmMGUyNjRiNTU4YSIsImlhdCI6MTY0MDg2NjU5NCwiZXhwIjoxNjQwOTUyOTk0fQ.FqBiRX3MOcYWL77dUpPuXV_OeSFYFFfQHY9t0v_VGqHYhh49GpndxA6INmfsCp3CtJolP1vUJxiuU4yFrYt3pw';
// const JWT_TOKEN =
//   'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpbWFuc2h1MTAwMTEiLCJpZCI6IjYxYmRhMmQzY2Y4NDJmMGUyNjRiNTU4YSIsImlhdCI6MTY0MDg2NjU5NCwiZXhwIjoxNjQwOTUyOTk0fQ.FqBiRX3MOcYWL77dUpPuXV_OeSFYFFfQHY9t0v_VGqHYhh49GpndxA6INmfsCp3CtJolP1vUJxiuU4yFrYt3pw'

const auth_status = 0;

export {
    JWT_TOKEN,
    isBSC,
    isWeb3,
    getWeb3,
    isMetaMask,
    connectWallet,
    walletAddress,
    isConnected,
    loadWallet,
    walletInstalled,
    checkBalance,
    initInvestment
};
