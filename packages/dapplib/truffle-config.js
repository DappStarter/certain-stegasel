require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth soccer million guess argue sun submit'; 
let testAccounts = [
"0x1184b74f6e3a8681dbe693f838afe3b051d3606cc0d042596ef8169d968d233d",
"0xdadcd148b16b36388914bb9df041419159bf9411133408585e305567c1277ffe",
"0xd1bf68caf4cdc8cf245acab095732cb228fac309d586e239fd1e5ac8e013c569",
"0xb8b8fc3a2dbe82fd28a9a560cb105c065f1e08010f5681405c8b9dac12a4cb9f",
"0x929bb9d6d4012d96431518c17f086ab3a175fdd1f7605eea561ad76d7d3367a0",
"0x784ae29826042744e67e4d7e64a05e38537a1f74563f739898acd015a6ff8a7b",
"0x109b13c2dcaf07dc885e782ce7027d17d5f65c1a563532f3839f7cbd975b734b",
"0xdb8baebce41acf13d223047068a71e4591bf03c2090d3bec82e1931319d5c03e",
"0xf59b481c65b6e71eca2d5c46cd6571ae24206db7947de7ed42bb9199938699bb",
"0x103a8e35d2faeb292d01ead5c10535ec4c7f006b5b307a8b93cd2146335d58b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
