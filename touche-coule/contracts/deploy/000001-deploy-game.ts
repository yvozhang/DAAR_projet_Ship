import 'dotenv/config'
import { DeployFunction } from 'hardhat-deploy/types'

const deployer: DeployFunction = async hre => {
  if (hre.network.config.chainId !== 31337) return
  const { deployer } = await hre.getNamedAccounts()
  await hre.deployments.deploy('Main', { from: deployer, log: true })
  await hre.deployments.deploy('InstanceShip', { from: deployer, log: true })
  await hre.deployments.deploy('InstanceShipSec', { from: deployer, log: true })
  await hre.deployments.deploy('InstanceShipThird', { from: deployer, log: true })
  await hre.deployments.deploy('InstanceShipFourth', { from: deployer, log: true })
}
export default deployer
