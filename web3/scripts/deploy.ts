import { ethers } from 'hardhat';

async function deploy(name: string, ...params: any[]) {
  const contractFactory = await ethers.getContractFactory(name);
  return await contractFactory.deploy(...params).then((f: any) => f.deployed());
}

async function main() {
  const [admin] = await ethers.getSigners();
  
  console.log(`Deploying a smart contract...`);

  const _metadataUri = 'https://gateway.pinata.cloud/ipfs/https://gateway.pinata.cloud/ipfs/QmX2ubhtBPtYw75Wrpv6HLb1fhbJqxrnbhDo1RViW3oVoi';
  const AVAXGods = (await deploy('AVAXGods', _metadataUri)).connect(admin);

  console.log({ AVAXGods: AVAXGods.address });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  });
