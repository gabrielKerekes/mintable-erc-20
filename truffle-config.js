const { NearProvider, nearAPI } = require('near-web3-provider');

module.exports = {
  networks: {
    near_local: {
      network_id: '*',
      skipDryRun: true,
      provider: () =>
        new NearProvider({
          networkId: 'local',
          masterAccountId: 'test.near',
          evmAccountId: 'evm.test.near',
          // If you get account/key errors you might also need to set the key manually
          //
          // keyStore: (() => {
          //   const keyStore = new nearAPI.keyStores.InMemoryKeyStore();
          //   keyStore.setKey(
          //     'local',
          //     'test.near',
          //     nearAPI.KeyPair.fromString(
          //       '[secret key from test.near.json]',
          //     ),
          //   );
          //   return keyStore;
          // })(),
        }),
    },
    near_mainnet: {
      network_id: 1313161554, // See https://chainid.network/
      skipDryRun: true,
      provider: () =>
        new NearProvider({
          networkId: 'mainnet',
          masterAccountId: process.env.NEAR_MASTER_ACCOUNT,
        }),
    },
    near_betanet: {
      network_id: '*',
      skipDryRun: true,
      provider: () =>
        new NearProvider({
          networkId: 'betanet',
          masterAccountId: process.env.NEAR_MASTER_ACCOUNT,
        }),
    },
    near_testnet: {
      network_id: '*',
      skipDryRun: true,
      provider: () =>
        new NearProvider({
          networkId: 'testnet',
          masterAccountId: process.env.NEAR_MASTER_ACCOUNT,
        }),
    },
    develop: {
      host: '127.0.0.1',
      network_id: '*',
      port: 8545,
    },
  },
  compilers: {
    solc: {
      version: '0.8.0',
    },
  },
};
