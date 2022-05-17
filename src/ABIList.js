exports.ERC20ABI = ["function decimals() external view returns (uint8)"];

exports.factoryABI = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair);",
];

exports.pairABI = [
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
];

exports.routerABI = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view virtual override returns (uint[] memory amounts)",
];
