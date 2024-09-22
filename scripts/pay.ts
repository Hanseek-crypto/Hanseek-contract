import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const tx = await deployer.sendTransaction({
    to: "0xca5802f9b1a72e47bce75aac85d005fb3e1a584f",
    value: ethers.parseEther("100"),
  });

  await tx.wait();
}

main();
