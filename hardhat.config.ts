import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const RSK_MAINNET_RPC_URL = process.env.RSK_MAINNET_RPC_URL;
const RSK_TESTNET_RPC_URL = process.env.RSK_TESTNET_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!RSK_MAINNET_RPC_URL) {
  throw new Error("The RPC URL for the mainnet is not configured.");
}

if (!RSK_TESTNET_RPC_URL) {
  // Fixed duplicate check for RSK_MAINNET_RPC_URL
  throw new Error("The RPC URL for the testnet is not configured.");
}

if (!PRIVATE_KEY) {
  throw new Error("Private key is not configured.");
}

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    rskMainnet: {
      url: RSK_MAINNET_RPC_URL,
      chainId: 30,
      gasPrice: 90000000,
      accounts: [PRIVATE_KEY],
    },
    rskTestnet: {
      url: RSK_TESTNET_RPC_URL,
      chainId: 31,
      gasPrice: 90000000,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
