pragma solidity ^0.8;
import './Ship.sol';
import 'hardhat/console.sol';

contract InstanceShipSec is Ship{

    uint private x;
    uint private y;

    uint private game_width;
    uint private game_height;


    function update(uint x_, uint y_) public virtual override{
        x = x_;
        y = y_;
    }

    function fire() public virtual override returns (uint, uint){
        uint256 randomx = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender)))%game_width;
        uint256 randomy = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender)))%game_height;

        while (randomx == x && randomy == y){
            randomx = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender)))%game_width;
            randomy = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender)))%game_height;
        }     

        return (randomx,randomy);
    }

    function place(uint width, uint height) public override returns (uint, uint){
        game_width = width;
        game_height = height;

        uint256 randomx = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender)))%width;
        uint256 randomy = uint256(keccak256(abi.encodePacked(block.timestamp,block.difficulty, msg.sender)))%height;

        return (randomx,randomy);
    }

}