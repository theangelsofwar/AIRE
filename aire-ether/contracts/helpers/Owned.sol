pragma solidity >= 0.5.16;

contract Owned {
  address public ownerAddr;

  constructor() public {
    ownerAddr = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == ownerAddr);
    _;
  }

  function transferOwnership(address _newOwner) public onlyOwner {
    require(_newOwner != address(0));

    ownerAddr = _newOwner;
  }
}