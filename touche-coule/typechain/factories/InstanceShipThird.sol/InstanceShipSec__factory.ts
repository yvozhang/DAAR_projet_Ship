/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  InstanceShipSec,
  InstanceShipSecInterface,
} from "../../InstanceShipThird.sol/InstanceShipSec";

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
        name: "x_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y_",
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
  "0x608060405234801561001057600080fd5b506104a7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806312789b5b146100465780632fb565e814610077578063457094cc14610093575b600080fd5b610060600480360381019061005b91906102c1565b6100b2565b60405161006e929190610310565b60405180910390f35b610091600480360381019061008c91906102c1565b61014c565b005b61009b61015e565b6040516100a9929190610310565b60405180910390f35b60008083600281905550826003819055506000844244336040516020016100db939291906103d4565b6040516020818303038152906040528051906020012060001c6100fe9190610440565b9050600084424433604051602001610118939291906103d4565b6040516020818303038152906040528051906020012060001c61013b9190610440565b905081819350935050509250929050565b81600081905550806001819055505050565b600080600060025442443360405160200161017b939291906103d4565b6040516020818303038152906040528051906020012060001c61019e9190610440565b905060006003544244336040516020016101ba939291906103d4565b6040516020818303038152906040528051906020012060001c6101dd9190610440565b90505b600054821480156101f2575060015481145b156102765760025442443360405160200161020f939291906103d4565b6040516020818303038152906040528051906020012060001c6102329190610440565b915060035442443360405160200161024c939291906103d4565b6040516020818303038152906040528051906020012060001c61026f9190610440565b90506101e0565b6000546001549350935050509091565b600080fd5b6000819050919050565b61029e8161028b565b81146102a957600080fd5b50565b6000813590506102bb81610295565b92915050565b600080604083850312156102d8576102d7610286565b5b60006102e6858286016102ac565b92505060206102f7858286016102ac565b9150509250929050565b61030a8161028b565b82525050565b60006040820190506103256000830185610301565b6103326020830184610301565b9392505050565b6000819050919050565b61035461034f8261028b565b610339565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103858261035a565b9050919050565b60008160601b9050919050565b60006103a48261038c565b9050919050565b60006103b682610399565b9050919050565b6103ce6103c98261037a565b6103ab565b82525050565b60006103e08286610343565b6020820191506103f08285610343565b60208201915061040082846103bd565b601482019150819050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061044b8261028b565b91506104568361028b565b92508261046657610465610411565b5b82820690509291505056fea26469706673582212206e48f031283558acf5b681c004457cc5d43bf4a8ffa663cbf7b061a038634a7464736f6c63430008100033";

type InstanceShipSecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InstanceShipSecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InstanceShipSec__factory extends ContractFactory {
  constructor(...args: InstanceShipSecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InstanceShipSec> {
    return super.deploy(overrides || {}) as Promise<InstanceShipSec>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InstanceShipSec {
    return super.attach(address) as InstanceShipSec;
  }
  override connect(signer: Signer): InstanceShipSec__factory {
    return super.connect(signer) as InstanceShipSec__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InstanceShipSecInterface {
    return new utils.Interface(_abi) as InstanceShipSecInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InstanceShipSec {
    return new Contract(address, _abi, signerOrProvider) as InstanceShipSec;
  }
}
