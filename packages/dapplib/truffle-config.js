require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind proud imitate prize forget slight'; 
let testAccounts = [
"0x131c934c593cd50ac0e292731e3f64ee71d72d5534882c3f90692446cfb4d1ef",
"0x0ae4571d18eb219671252f5a18fbd1830e16ee498930682173a850fb896995e7",
"0x02b3aaa368dbde372c947ab75e5d72d847f30a83afb068fa3a7d67fc18094ba0",
"0x9daf8ccafa7187d3eb49e38b429b272747f530b1be88278294e3e35eb8047771",
"0x6c98992b6675cd2669f2f3283ff0a68a6c9fda24f26637a8ac46bed2b212390b",
"0x8598a830f4fdd13e84ab2ce574db78f58fb3632d9f44a321d12a91f53c553917",
"0xa9eb573d5a53244a8719d87873c33e03d14097be79d1135cfa270aa6130b086a",
"0xbf37c23da335d4f1ebf93439dc36ef640b17640536465ff4e669029706bf08f6",
"0x32fdeaba101ee5c1503b86e5d8eccfa9cb561428e13fd9959a4a4114667beb2f",
"0xeb572a6e88f793151874e6e00cbc40c12852ee7e9b698700fbae0782eed1f32b"
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
            version: '^0.8.0'
        }
    }
};

