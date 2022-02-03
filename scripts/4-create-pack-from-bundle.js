import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = '0x724B0ca407caAFBC83D3d14640c56024F0ed5eAb'
  const bundleModule = sdk.getBundleModule(bundleModuleAddress)

  const packModuleAddress = "0x16F8BF8EeE59d5945603cC394B8fed1F31F9B2F1"
  const packModule = sdk.getPackModule(packModuleAddress)

  console.log('Getting all NFTs from the bundle...')
  const nftInBundle = await bundleModule.getAll()

  console.log('NFTs in bundle:');
  console.log(nftInBundle);

  console.log('Creating a pack containing the NFTs from bundle..');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Good soosh',
      image: '/assets/otoro-drawing.jpeg'
    },
    assets: nftInBundle.map(nft => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    }))
  })

  console.log('Pack created');
  console.log(created);
}

try {
  await main()
} catch (error) {
  console.error('error minting the NFTs', error)
  process.exit(1)
}