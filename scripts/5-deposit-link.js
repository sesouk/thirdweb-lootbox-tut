import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x16F8BF8EeE59d5945603cC394B8fed1F31F9B2F1"
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log("Depositing Link...");

  const amount = ethers.utils.parseEther('2');

  await packModule.depositLink(amount);
  console.log('Deposited!')

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

try {
  await main();
} catch (error) {
  console.error("Error depositing the LINK", error);
  process.exit(1);
}