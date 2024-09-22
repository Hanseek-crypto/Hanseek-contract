import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    hardhat: {
      chainId: 545,
      accounts: [
        {
          privateKey: process.env.PRIVATE_KEY!,
          balance: "10000000000000000000000",
        },
      ],
    },
    testnet: {
      url: "https://testnet.evm.nodes.onflow.org",
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
};

export default config;
