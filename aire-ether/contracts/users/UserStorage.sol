pragma solidity >= 0.5.16;

import '../helpers/BaseStorage.sol';

contract UserStorage is BaseStorage {
  mapping(uint => Profile) public profiles;
  mapping(address => uint) public addresses;
  mapping(bytes32 => uint) public usernames;

  struct Profile {
    uint id;
    bytes32 username;
    bytes32 firstname;
    bytes32 lastname;
    string bio;
    string email;
  }

  uint latestUserId = 0;

  function createUser(
    address _address,
    bytes32 _username,
    bytes32 _firstname,
    bytes32 _lastname,
    string _bio,
    string _email
  ) public onlyController returns(uint _newUserId) {
    latestUserId++;

    profiles[latestUserId] = Profile(
      latestUserId,
      _username,
      _firstname,
      _lastname,
      _bio,
      _email
    );

    addresses[_address] = latestUserId;
    usernames[_username] = latestUserId;
  }
}