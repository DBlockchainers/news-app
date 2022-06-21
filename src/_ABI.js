const CoinSpaceXAbi = [
    {inputs: [], stateMutability: 'nonpayable', type: 'constructor'},
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'investor',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sponsor',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Invest',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'receiver',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256'
            }
        ],
        name: 'Withdraw',
        type: 'event'
    },
    {
        inputs: [
            {internalType: 'address', name: '_token', type: 'address'},
            {internalType: 'bool', name: '_accepted', type: 'bool'}
        ],
        name: 'acceptedToken',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'token', type: 'address'},
            {internalType: 'address', name: 'sponsor', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'investInBEP20',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [{internalType: 'address', name: 'sponsor', type: 'address'}],
        name: 'investInBNB',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{internalType: 'address', name: '', type: 'address'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'token', type: 'address'},
            {
                internalType: 'address payable[]',
                name: '_wallets',
                type: 'address[]'
            },
            {internalType: 'uint256[]', name: '_amounts', type: 'uint256[]'}
        ],
        name: 'safeSendToken',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'token', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'safeTokenWithdraw',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'safeWithdraw',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{internalType: 'address', name: '_manager', type: 'address'}],
        name: 'setManager',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const BUSDAbi = [
    {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {
        constant: true,
        inputs: [],
        name: '_decimals',
        outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: '_name',
        outputs: [{internalType: 'string', name: '', type: 'string'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: '_symbol',
        outputs: [{internalType: 'string', name: '', type: 'string'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {internalType: 'address', name: 'owner', type: 'address'},
            {internalType: 'address', name: 'spender', type: 'address'}
        ],
        name: 'allowance',
        outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {internalType: 'address', name: 'spender', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'approve',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [{internalType: 'address', name: 'account', type: 'address'}],
        name: 'balanceOf',
        outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}],
        name: 'burn',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {internalType: 'address', name: 'spender', type: 'address'},
            {internalType: 'uint256', name: 'subtractedValue', type: 'uint256'}
        ],
        name: 'decreaseAllowance',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getOwner',
        outputs: [{internalType: 'address', name: '', type: 'address'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {internalType: 'address', name: 'spender', type: 'address'},
            {internalType: 'uint256', name: 'addedValue', type: 'uint256'}
        ],
        name: 'increaseAllowance',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}],
        name: 'mint',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{internalType: 'string', name: '', type: 'string'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [{internalType: 'address', name: '', type: 'address'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{internalType: 'string', name: '', type: 'string'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {internalType: 'address', name: 'recipient', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'transfer',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {internalType: 'address', name: 'sender', type: 'address'},
            {internalType: 'address', name: 'recipient', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'transferFrom',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
const DSFAbi = [
    {inputs: [], stateMutability: 'nonpayable', type: 'constructor'},
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Approval',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address'
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256'
            }
        ],
        name: 'Transfer',
        type: 'event'
    },
    {stateMutability: 'payable', type: 'fallback'},
    {
        inputs: [{internalType: 'address', name: 'wallet', type: 'address'}],
        name: 'addToBlackList',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'owner', type: 'address'},
            {internalType: 'address', name: 'spender', type: 'address'}
        ],
        name: 'allowance',
        outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'spender', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'approve',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{internalType: 'address', name: 'account', type: 'address'}],
        name: 'balanceOf',
        outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'account', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'burnFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'spender', type: 'address'},
            {internalType: 'uint256', name: 'subtractedValue', type: 'uint256'}
        ],
        name: 'decreaseAllowance',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'spender', type: 'address'},
            {internalType: 'uint256', name: 'addedValue', type: 'uint256'}
        ],
        name: 'increaseAllowance',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'name',
        outputs: [{internalType: 'string', name: '', type: 'string'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [{internalType: 'address', name: '', type: 'address'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [{internalType: 'address', name: 'wallet', type: 'address'}],
        name: 'removeToBlackList',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'token', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'safeTokenWithdraw',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'safeWithdraw',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [{internalType: 'string', name: '', type: 'string'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'recipient', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'transfer',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {internalType: 'address', name: 'sender', type: 'address'},
            {internalType: 'address', name: 'recipient', type: 'address'},
            {internalType: 'uint256', name: 'amount', type: 'uint256'}
        ],
        name: 'transferFrom',
        outputs: [{internalType: 'bool', name: '', type: 'bool'}],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {stateMutability: 'payable', type: 'receive'}
];

export {DSFAbi, BUSDAbi, CoinSpaceXAbi};
