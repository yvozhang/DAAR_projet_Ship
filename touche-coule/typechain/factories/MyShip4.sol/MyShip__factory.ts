/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MyShip, MyShipInterface } from "../../MyShip4.sol/MyShip";

const _abi = [
  {
    inputs: [],
    name: "fire",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "width",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "height",
        type: "uint256",
      },
    ],
    name: "place",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610371806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806312789b5b146100465780632fb565e814610077578063457094cc14610093575b600080fd5b610060600480360381019061005b919061018b565b6100b2565b60405161006e9291906101da565b60405180910390f35b610091600480360381019061008c919061018b565b61013e565b005b61009b610142565b6040516100a99291906101da565b60405180910390f35b6000806000844244336040516020016100cd9392919061029e565b6040516020818303038152906040528051906020012060001c6100f0919061030a565b905060008442443360405160200161010a9392919061029e565b6040516020818303038152906040528051906020012060001c61012d919061030a565b905081819350935050509250929050565b5050565b600080600380915091509091565b600080fd5b6000819050919050565b61016881610155565b811461017357600080fd5b50565b6000813590506101858161015f565b92915050565b600080604083850312156101a2576101a1610150565b5b60006101b085828601610176565b92505060206101c185828601610176565b9150509250929050565b6101d481610155565b82525050565b60006040820190506101ef60008301856101cb565b6101fc60208301846101cb565b9392505050565b6000819050919050565b61021e61021982610155565b610203565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061024f82610224565b9050919050565b60008160601b9050919050565b600061026e82610256565b9050919050565b600061028082610263565b9050919050565b61029861029382610244565b610275565b82525050565b60006102aa828661020d565b6020820191506102ba828561020d565b6020820191506102ca8284610287565b601482019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061031582610155565b915061032083610155565b9250826103305761032f6102db565b5b82820690509291505056fea2646970667358221220bbf7d37a91618a3fdb8852114e807cc0d390254355bcf1a4cd98d77d290fe96764736f6c63430008100033";

type MyShipConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyShipConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyShip__factory extends ContractFactory {
  constructor(...args: MyShipConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyShip> {
    return super.deploy(overrides || {}) as Promise<MyShip>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyShip {
    return super.attach(address) as MyShip;
  }
  override connect(signer: Signer): MyShip__factory {
    return super.connect(signer) as MyShip__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyShipInterface {
    return new utils.Interface(_abi) as MyShipInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MyShip {
    return new Contract(address, _abi, signerOrProvider) as MyShip;
  }
}
