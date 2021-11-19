const salleyCoin = artifacts.require('SalleyCoin');

const chai = require('chai');
const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
const chaiPromised = require('chai-as-promised');

chai.use(chaiBN);
chai.use(chaiPromised);

const { expect } = chai;

contract('Coin test', (accounts) => {
	it('should have all coins', async () => {
		let instance = await salleyCoin.deployed();
		console.log(instance);
		const totalSupply = await instance.totalSupply();
		console.log(totalSupply);
		let balance = await instance.balanceOf(accounts[0]);
		console.log(balance);
	});
});
