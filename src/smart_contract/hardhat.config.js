require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const projectId = fs.readFileSync(".projectId").toString().trim() || "";
//account 2
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
module.exports = {
  solidity: "0.8.4",
  // paths:{
  //   artifacts: './artifacts'
  // },
  networks: {
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },



};
