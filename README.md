# Mintable ERC-20

This repo allows you to easily deploy a ERC-20 coin to NEAR evm. The `mint` function is made public so that coins can easily be minted.

## Setup

```
yarn
```

Set custom `name` and `symbol` in `./migrations/2_deploy.js`.

You also need to be logged in to NEAR betanet in you environment.

## Deploy

### Betanet

Run truffle migrations:

```
env NEAR_MASTER_ACCOUNT=[NEAR_ACCOUNT_ID].betanet truffle migrate --network near_betanet
```

Store the contract address somewhere.

### Localnet

Make sure `masterAccountId` and `evmAccountId` are set correctly in the `NearProvider` for the `near_local` configuration.

Run truffle migrations:

```
truffle migrate --network near_local
```

Store the contract address somewhere.

If you get an account/key error uncomment the `keyStore` section in `NearProvider` for `near_local` and paster your master account secret key.

## Minting

Run truffle console:

```
env NEAR_MASTER_ACCOUNT=[NEAR_ACCOUNT_ID].betanet truffle console --network near_betanet
```

_NOTE: for localnet `NEAR_MASTER_ACCOUNT` isn't used and of course, `--network` should be set to `near_local`._

And in the console execute:

```
let instance = await MintableERC20.at('[DEPLOYED_ADDRESS]')
await instance.mint('[ACCOUNT_ADDRESS]', '[AMOUNT]')
```

e.g. minting 1000 coins for address `0x10D15F5439C834EA27c884CF96BD070755F89F98` for a contract at `0x8383909ce256b395D3FEc4EbCED6d7433428D47b`:

```
let instance = await MintableERC20.at('0x8383909ce256b395D3FEc4EbCED6d7433428D47b')
await instance.mint('0x10D15F5439C834EA27c884CF96BD070755F89F98', '1000000000000000000000')
```

Verify:

```
let instance = await MintableERC20.at('0x8383909ce256b395D3FEc4EbCED6d7433428D47b')
(await instance.balanceOf('0x10D15F5439C834EA27c884CF96BD070755F89F98')).toString()
```
