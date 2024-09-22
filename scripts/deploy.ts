import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Reservation = await ethers.getContractFactory("ReservationContract");
  const reservation = await Reservation.deploy();

  await reservation.waitForDeployment();

  const reservationAddress = await reservation.getAddress();
  console.log("ReservationContract address:", reservationAddress);

  const Withdraw = await ethers.getContractFactory("WithdrawContract");
  const reward = await Withdraw.deploy();

  await reward.waitForDeployment();

  const rewardAddress = await reward.getAddress();
  console.log("CreatorRewardContract address:", rewardAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
