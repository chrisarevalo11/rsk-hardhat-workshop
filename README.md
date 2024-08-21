# Roostock Hardhat Workshop Guide

This project is designed to deploy smart contracts on the [Rootstock](https://rootstock.io/) network using [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview) for deployment. We'll configure the network connection using the Rootstock [RPC API](https://rpc.rootstock.io/).

## Prerequisites

Before you can deploy the contracts, ensure you have the following installed on your pc:

- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management
- [Hardhat](https://hardhat.org/getting-started/) - a development environment for Ethereum software
- [Hardhat Ignition](https://hardhat.org/ignition/docs/getting-started#overview) - a plugin for deploying smart contracts in a predictable and reproducible manner
- A [Rootstock RPC API](https://rpc.rootstock.io/) endpoint for connecting to the Rootstock network (Mainnet or Testnet)

## Project Structure

```
.
├── contracts
│   └── contracts...
├── ignition
│   └── modules
│       └── deployments...
├── test
│   └── tests...
├── package.json
├── hardhat.config.ts
├── README.md
└── tsconfig.json
```

## Run the project

1. Clone the repository:

```bash
git clone https://github.com/chrisarevalo11/rsk-hardhat-workshop.git
cd rsk-hardhat-workshop
```

2. Open it in your preferred IDE.
3. Install dependencies:

```bash
npm i
```

4. Go to the [Rootstock RPC API](https://rpc.rootstock.io/) web and get your API keys. Copy it and paste it into a `.env` file as well as your deployer account's private key. Remember to have enough funds to pay for gas. If needed, go to the [Rootstock Faucet](https://faucet.rootstock.io/) and get testnet tokens.

```bash
RSK_MAINNET_RPC_URL=
RSK_TESTNET_RPC_URL=
PRIVATE_KEY=
```

5. Compile and test your contracts:

```bash
npx hardhat compile
npx hardhat test
```

6. Deploy your contracts:

```bash
npx hardhat ignition deploy --network rskTestnet ignition/modules/Box.ts
```

And, if you followed the instructions correctly and had luck, you see something like this:

```bash
✔ Confirm deploy to network rskTestnet (31)? … yes
Hardhat Ignition 🚀

Resuming existing deployment from ./ignition/deployments/chain-31

Deploying [ BoxModule ]

Batch #1
  Executed BoxModule#Box

[ BoxModule ] successfully deployed 🚀

Deployed Addresses

BoxModule#Box - 0x4949D33d795dF56283EEB3cE7744038Ab229712f
```

Now go to the [Rootstock testnet explorer](https://explorer.testnet.rootstock.io/) and check that the contract has indeed been deployed.

## Well Done!!

You deployed a contract on Rootstock Network. Keep on building together in this ecosystem! If you had trouble throughout this guide or need further help, please reach out to us on [Discord](https://discord.com/invite/rootstock) and we will get back to you as soon as possible.
