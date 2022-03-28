//contract deployed to 0x5c42660D164A6D5e06CC8065ea388F5983002653

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Teles", "Shiro", "Don Juan"],
    [
      "https://i.imgur.com/UHA4XAv.jpg",
      "https://i.imgur.com/MnHUdPM.jpg",
      "https://i.imgur.com/PEw88se.jpg",
    ],
    [180, 215, 300],
    [150, 125, 100],
    "Mark Zuckerberg",
    "https://i.imgur.com/KiOyHem.jpeg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
