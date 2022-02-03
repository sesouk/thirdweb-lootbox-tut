import { read, readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {

  const bundleModuleAddress = '0x724B0ca407caAFBC83D3d14640c56024F0ed5eAb'
  const bundleModule = sdk.getBundleModule(bundleModuleAddress)

  console.log('Creating NFT batch...')

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Uni Nigiri',
        description: 'Really good soosh!',
        image: readFileSync('./assets/uni.jpeg'),
        properties: {
          rarity: 'pretty rare!!',
          fanciness: 9
        }
      },
      supply: 35
    },
    {
      metadata: {
        name: 'Otoro Nigiri',
        description: 'The best soosh out there',
        image: readFileSync('./assets/otoro.jpeg'),
        properties: {
          rarity: 'extremely rare!!',
          fanciness: 10
        }
      },
      supply: 10
    },
    {
      metadata: {
        name: 'Hamachi Nigiri',
        description: 'Can\'t complain about some good hamachi',
        image: readFileSync('./assets/hamachi.jpeg'),
        properties: {
          rarity: 'not too rare',
          fanciness: 7
        }
      },
      supply: 55
    }
  ])

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2))
}

try {
  await main()
} catch (error) {
  console.error("Error minting the NFTs", error)
  process.exit(1)
}