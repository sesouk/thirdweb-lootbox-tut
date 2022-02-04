import { sdk } from "./helpers.js"

async function main() {
  const packModuleAddress = "0x16F8BF8EeE59d5945603cC394B8fed1F31F9B2F1"
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log('Opening the pack...')
  const opened = await packModule.open('0')
  console.log('Opened the pack!')
  console.log(opened)
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error)
  process.exit(1)
}