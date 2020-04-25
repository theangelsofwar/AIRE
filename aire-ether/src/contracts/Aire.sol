pragma solidity ^0.5.0;

contract Aire {
  string public name;
  uint aireCount = 0;
  uint echos = 0;
  mapping(uint => Aire) public airePosts;

  struct Aire {
    uint id;
    string content;
  }

  struct Entity {
    uint id;
    string name;
  }

  event AireCreated(
    uint id,
    string content,
    uint echos,
  );

  event AireEchoed(
    uint id,
    uint aireId,
  );

  constructor() public {
    name = "to AIRE is to HUMAN";
  }

  function createAire(string memory _content) public {
    require(bytes(_content).length > 0);
    airePosts[aireCount++] = Aire(aireCount, __content, 0, msg.sender);
    emit AireCreated(airCount, _content, 0, msg.sender);
  }

  function echoAire(uint memory _aireId) public {
    require(bytes(_aireId));
    Aire(_airId).echos++;
  }
}