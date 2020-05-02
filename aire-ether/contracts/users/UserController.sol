pragma solidity >= 0.5.16;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import './UserStorage.sol';

contract UserController is BaseController {
  function createUser(
    bytes32 _username,
    bytes32 _firstname,
    bytes32 _lastname,
    string _bio,
    string _email
  ) public returns(uint _newUserId) {
    ContractManager _manager = ContractManager(managerAddr);

    address _userStorageAddr = _manager.getAddress("UserStorage");
    UserStorage _storage = UserStorage(_userStorageAddr);

    require(_storage.addresses(msg.sender) == 0);
    require(_storage.usernames(_username) == 0);

    return _storage.createUser(
      msg.sender,

    )
  }

}