var SalleyCoin = artifacts.require('./SalleyCoin.sol');

module.exports = function (deployer) {
	deployer.deploy(SalleyCoin, 10000);
};
