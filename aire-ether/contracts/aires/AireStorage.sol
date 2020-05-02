pragma solidity >= 0.5.16;

import '../helpers/BaseStorage.sol';

contract AireStorage is BaseStorage {
  mapping(uint => Aire) public aires;
  mapping(uint => uint[]) public userAireIds;
  uint[] public AireIds;

  struct Aire {
    uint id;
    string content;
    uint userId;
    uint postedAt;
  }

  uint latestAireId = 0;

  function createAire(uint _userId, string _content) public onlyController returns(uint) {
    latestAireId++;

    aires[latestAireId] = Aire(latestAireId, _content, _userId, now);
    userAireIds[_userId].push(latestAireId);
    aireIds.push(latestAireId);
    return latestAireId;
  }

  function getAireIdsFromUser(uint _userId) public view returns(uint[]) {
    return userAireIds[_userId];
  }

  function getNumAires() public view returns(uint _numAires) {
    return aireIds.length;
  }
}
