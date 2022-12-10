import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mainnet: {
      url: `${process.env.MUMBAI_ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PK}`],
    },
    rinkeby: {
      url: `${process.env.RINKEBY_ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PK}`],
    },
    mumbai: {
      url: `${process.env.MUMBAI_ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PK}`],
    },
    polygon: {
      url: `${process.env.POLYGON_ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PK}`],
    },
  },
};

export default config;
