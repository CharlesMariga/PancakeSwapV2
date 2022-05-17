const ethers = require("ethers");

const {
  addressFactory,
  addressRouter,
  addressFrom,
  addressTo,
} = require("./addressList");

const { ERC20ABI, factoryABI, routerABI, pairABI } = require("./ABIList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

console.log(provider);

// Connect to factory contract
const contractFactory = new ethers.Contract(
  addressFactory,
  factoryABI,
  provider
);

// Connect to the router contract
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
console.log(provider);
