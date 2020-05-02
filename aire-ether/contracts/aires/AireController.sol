pragma solidity >= 0.5.16;

import '../helpers/BaseController.sol';
import '../ContractManager.sol';
import '../AireStorage.sol';
import '../users/UserStorage.sol';

contract AireController is BaseController {
  function createAire(string _content) public returns(uint) {
    ContractManager _manager = ContractManager(managerAddr);

    address _userStorageAddr = _manager.getAddress("UserStorage");
    UserStorage _userStorage = UserStorage(_userStorageAddr);
    uint _userId = _userStorage.addresses(msg.sender);

    require(_userId != 0);

    address _aireStorageAddr = _manager.getAddress("AireStorage");
    AireStorage _aireStorage = AireStorage(_aireStorageAddr);

    return _aireStorage.createAire(_userId, _content);
  }
}