const MintableERC20 = artifacts.require('MintableERC20');

module.exports = function (deployer) {
  const name = 'MyCoin';
  const symbol = 'MC';
  deployer.deploy(MintableERC20, name, symbol);
};
