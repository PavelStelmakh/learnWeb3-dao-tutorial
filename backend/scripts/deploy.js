const hre = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require('../constants');

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
      value: ethers.utils.parseEther("1"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// FakeNFTMarketplace - 0x66b46071715812Cf89EE98c489374B0A5DC471b5
// CryptoDevsDAO - 0xCC192d8AB7eBd7A0b7380CEB47bBE46bAC2617CB
