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

// Connect to factory contract
const contractFactory = new ethers.Contract(
  addressFactory,
  factoryABI,
  provider
);

// Connect to the router contract
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

const getPrices = async (amountInHuman) => {
  const contractToken = new ethers.Contract(addressFrom, ERC20ABI, provider);
  const decimals = await contractToken.decimals();
  const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();
  console.log(amountIn);
};

const amountInHuman = "500";
getPrices(amountInHuman);
