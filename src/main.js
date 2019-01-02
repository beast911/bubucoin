const {BlockChain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b77ffda678e57f8f146a5b7f3734172d620639f1292ecc614994983687f06632');
const myWalletAddress = myKey.getPublic('hex');

let bubuCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key of some wallet', 10);
tx1.signTransaction(myKey);
bubuCoin.addTransaction(tx1);

console.log('\n Kick start mining');

bubuCoin.minePendingTransactions(myWalletAddress);
console.log(`Balance for Shuang Qiu is ${bubuCoin.getBalanceOfAddress(myWalletAddress)}`);

console.log('\n Kick start mining again.....');

bubuCoin.minePendingTransactions(myWalletAddress);
console.log(`\n Balance for Shuang Qiu is ${bubuCoin.getBalanceOfAddress(myWalletAddress)}`);
