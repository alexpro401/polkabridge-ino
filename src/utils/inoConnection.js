import Web3 from "web3";
import constants from "./constants";

let inoConstant;
if (constants.net === 0) {
  inoConstant = {
    rpcUrl: "https://bsc-dataseed.binance.org/",
    chainId: 56, // Smart Chain - Mainnet chain id
    contractAddress: "0x973bdAE2f772f5Bc8e568F8b84872629f3FA128F",
    abi: [
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_receiveToken",
            type: "address",
          },
          { internalType: "address", name: "_WETH", type: "address" },
          { internalType: "string", name: "_name", type: "string" },
          { internalType: "string", name: "_symbol", type: "string" },
          { internalType: "string", name: "_uri", type: "string" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
        ],
        name: "TransferBatch",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "TransferSingle",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "value",
            type: "string",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "URI",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "IsWhitelist",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "WETH",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "activePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "user", type: "address[]" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "addMulWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_PoolId", type: "uint256" },
          { internalType: "uint256", name: "_TotalSold", type: "uint256" },
          {
            internalType: "uint256",
            name: "_MinimumTokenSoldout",
            type: "uint256",
          },
          { internalType: "uint256", name: "_RatePerETH", type: "uint256" },
          { internalType: "uint256", name: "_BaseURI", type: "uint256" },
        ],
        name: "addPackageToPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_Begin", type: "uint256" },
          { internalType: "uint256", name: "_End", type: "uint256" },
          { internalType: "uint256", name: "_Type", type: "uint256" },
          {
            internalType: "uint256",
            name: "_AmountPBRRequire",
            type: "uint256",
          },
          { internalType: "uint256", name: "_LockDuration", type: "uint256" },
          { internalType: "uint256", name: "_ActivedDate", type: "uint256" },
          { internalType: "uint256", name: "_StopDate", type: "uint256" },
        ],
        name: "addPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "addWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint256", name: "id", type: "uint256" },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "accounts", type: "address[]" },
          { internalType: "uint256[]", name: "ids", type: "uint256[]" },
        ],
        name: "balanceOfBatch",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "claimPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "contractURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "pure",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
        ],
        name: "getBalanceItemByPackageId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
        ],
        name: "getPackageInfo",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "Id", type: "uint256" },
              { internalType: "uint256", name: "PoolId", type: "uint256" },
              { internalType: "uint256", name: "TotalSold", type: "uint256" },
              { internalType: "bool", name: "IsActived", type: "bool" },
              { internalType: "bool", name: "IsStopped", type: "bool" },
              {
                internalType: "uint256",
                name: "MinimumTokenSoldout",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "TotalItemCount",
                type: "uint256",
              },
              { internalType: "uint256", name: "RatePerETH", type: "uint256" },
              { internalType: "uint256", name: "BaseURI", type: "uint256" },
              {
                internalType: "address[]",
                name: "UsersPurchased",
                type: "address[]",
              },
            ],
            internalType: "struct PolkaBridgeINO.Package",
            name: "retSt",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
        name: "getPoolInfo",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "Id", type: "uint256" },
              { internalType: "uint256", name: "Begin", type: "uint256" },
              { internalType: "uint256", name: "End", type: "uint256" },
              { internalType: "uint256", name: "Type", type: "uint256" },
              {
                internalType: "uint256",
                name: "AmountPBRRequire",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "LockDuration",
                type: "uint256",
              },
              { internalType: "uint256", name: "ActivedDate", type: "uint256" },
              { internalType: "uint256", name: "StopDate", type: "uint256" },
              { internalType: "bool", name: "IsActived", type: "bool" },
              { internalType: "bool", name: "IsStopped", type: "bool" },
              {
                internalType: "uint256",
                name: "TotalPackageCount",
                type: "uint256",
              },
            ],
            internalType: "struct PolkaBridgeINO.INOPool",
            name: "retSt",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
        ],
        name: "getRemainINOToken",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
        name: "getWhitelistfo",
        outputs: [
          { internalType: "address", name: "", type: "address" },
          { internalType: "bool", name: "", type: "bool" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "bool", name: "", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "poollist",
        outputs: [
          { internalType: "uint256", name: "Id", type: "uint256" },
          { internalType: "uint256", name: "PoolId", type: "uint256" },
          { internalType: "uint256", name: "TotalSold", type: "uint256" },
          { internalType: "bool", name: "IsActived", type: "bool" },
          { internalType: "bool", name: "IsStopped", type: "bool" },
          {
            internalType: "uint256",
            name: "MinimumTokenSoldout",
            type: "uint256",
          },
          { internalType: "uint256", name: "TotalItemCount", type: "uint256" },
          { internalType: "uint256", name: "RatePerETH", type: "uint256" },
          { internalType: "uint256", name: "BaseURI", type: "uint256" },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_packageId", type: "uint256" },
          { internalType: "uint256", name: "_quantity", type: "uint256" },
        ],
        name: "purchaseINO",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256[]", name: "ids", type: "uint256[]" },
          { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "stopPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
          { internalType: "bool", name: "isWhitelist", type: "bool" },
          { internalType: "bool", name: "isActived", type: "bool" },
        ],
        name: "updateWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "uri",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "whitelist",
        outputs: [
          { internalType: "uint256", name: "Id", type: "uint256" },
          { internalType: "address", name: "UserAddress", type: "address" },
          { internalType: "bool", name: "IsWhitelist", type: "bool" },
          { internalType: "uint256", name: "WhitelistDate", type: "uint256" },
          { internalType: "uint256", name: "PurchaseTime", type: "uint256" },
          { internalType: "bool", name: "IsActived", type: "bool" },
          { internalType: "bool", name: "IsClaimed", type: "bool" },
          {
            internalType: "uint256",
            name: "TotalETHPurchase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "PurchasedItemCount",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "withdrawPoolFund",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  };
} else {
  inoConstant = {
    rpcUrl: "https://data-seed-prebsc-2-s1.binance.org:8545/",
    chainId: 97, // Testnet
    contractAddress: "0x5Ee56F3ac26F6d8172a0C850778637a260484702",
    abi: [
      {
        inputs: [
          {
            internalType: "address payable",
            name: "_receiveToken",
            type: "address",
          },
          { internalType: "address", name: "_WETH", type: "address" },
          { internalType: "string", name: "_name", type: "string" },
          { internalType: "string", name: "_symbol", type: "string" },
          { internalType: "string", name: "_uri", type: "string" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address",
          },
        ],
        name: "OwnershipTransferred",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            indexed: false,
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
        ],
        name: "TransferBatch",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "TransferSingle",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "string",
            name: "value",
            type: "string",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "URI",
        type: "event",
      },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "IsWhitelist",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "WETH",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "activePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "user", type: "address[]" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "addMulWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_PoolId", type: "uint256" },
          {
            internalType: "uint256",
            name: "_MinimumTokenSoldout",
            type: "uint256",
          },
          { internalType: "uint256", name: "_TotalItemCount", type: "uint256" },
          { internalType: "uint256", name: "_RatePerETH", type: "uint256" },
        ],
        name: "addPackageToPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_Begin", type: "uint256" },
          { internalType: "uint256", name: "_End", type: "uint256" },
          { internalType: "uint256", name: "_Type", type: "uint256" },
          {
            internalType: "uint256",
            name: "_AmountPBRRequire",
            type: "uint256",
          },
          { internalType: "uint256", name: "_LockDuration", type: "uint256" },
        ],
        name: "addPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "addWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "uint256", name: "id", type: "uint256" },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address[]", name: "accounts", type: "address[]" },
          { internalType: "uint256[]", name: "ids", type: "uint256[]" },
        ],
        name: "balanceOfBatch",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "claimPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
        ],
        name: "getBalanceItemByPackageId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
        ],
        name: "getPackageInfo",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "Id", type: "uint256" },
              { internalType: "uint256", name: "PoolId", type: "uint256" },
              {
                internalType: "uint256",
                name: "TotalSoldCount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "MinimumTokenSoldout",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "TotalItemCount",
                type: "uint256",
              },
              { internalType: "uint256", name: "RatePerETH", type: "uint256" },
              {
                internalType: "address[]",
                name: "UsersPurchased",
                type: "address[]",
              },
            ],
            internalType: "struct PolkaBridgeINO.Package",
            name: "retSt",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "getPoolInfo",
        outputs: [
          {
            components: [
              { internalType: "uint256", name: "Id", type: "uint256" },
              { internalType: "uint256", name: "Begin", type: "uint256" },
              { internalType: "uint256", name: "End", type: "uint256" },
              { internalType: "uint256", name: "Type", type: "uint256" },
              {
                internalType: "uint256",
                name: "AmountPBRRequire",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "LockDuration",
                type: "uint256",
              },
              { internalType: "uint256", name: "ActivedDate", type: "uint256" },
              { internalType: "uint256", name: "StopDate", type: "uint256" },
              { internalType: "bool", name: "IsActived", type: "bool" },
              { internalType: "bool", name: "IsStopped", type: "bool" },
              {
                internalType: "uint256[]",
                name: "PackageIds",
                type: "uint256[]",
              },
            ],
            internalType: "struct PolkaBridgeINO.INOPool",
            name: "retSt",
            type: "tuple",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "user_", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
        ],
        name: "getPurchasedPackageIds",
        outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
        ],
        name: "getRemainINOToken",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "account", type: "address" },
          { internalType: "address", name: "operator", type: "address" },
        ],
        name: "isApprovedForAll",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "owner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "packageLength",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "poolLength",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "packageId", type: "uint256" },
          { internalType: "uint256", name: "quantity", type: "uint256" },
        ],
        name: "purchaseINO",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "purchasecheck",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256[]", name: "ids", type: "uint256[]" },
          { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "operator", type: "address" },
          { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "pid", type: "uint256" }],
        name: "stopPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "_PackageId", type: "uint256" },
          {
            internalType: "uint256",
            name: "_MinimumTokenSoldout",
            type: "uint256",
          },
          { internalType: "uint256", name: "_TotalItemCount", type: "uint256" },
          { internalType: "uint256", name: "_RatePerETH", type: "uint256" },
        ],
        name: "updatePackage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "pid", type: "uint256" },
          { internalType: "uint256", name: "_Begin", type: "uint256" },
          { internalType: "uint256", name: "_End", type: "uint256" },
          { internalType: "uint256", name: "_Type", type: "uint256" },
          {
            internalType: "uint256",
            name: "_AmountPBRRequire",
            type: "uint256",
          },
          { internalType: "uint256", name: "_LockDuration", type: "uint256" },
        ],
        name: "updatePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          { internalType: "address", name: "user", type: "address" },
          { internalType: "uint256", name: "pid", type: "uint256" },
          { internalType: "bool", name: "isWhitelist", type: "bool" },
        ],
        name: "updateWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "uri",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          { internalType: "uint256", name: "", type: "uint256" },
          { internalType: "address", name: "", type: "address" },
        ],
        name: "whitelist",
        outputs: [
          { internalType: "uint256", name: "Id", type: "uint256" },
          { internalType: "bool", name: "IsWhitelist", type: "bool" },
          { internalType: "uint256", name: "WhitelistDate", type: "uint256" },
          { internalType: "uint256", name: "PurchaseTime", type: "uint256" },
          { internalType: "bool", name: "IsClaimed", type: "bool" },
          {
            internalType: "uint256",
            name: "TotalETHPurchase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "PurchasedItemCount",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "withdrawPoolFund",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
  };
}

var web3 = new Web3(window.ethereum);
var inoContract = new web3.eth.Contract(
  inoConstant.abi,
  inoConstant.contractAddress
);

export default inoContract;
