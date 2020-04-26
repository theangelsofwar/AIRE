pragma solidity ^0.5.0;

contract Aire {
  string public name;
  uint public aireCount = 0;
  uint public echos = 0;
  uint public mists = 0;
  mapping(uint => Aire) public airePosts;

  struct Aire {
    uint id;
    string content;
    uint echos;
    uint mists;
    address payable author;
  }

  struct Entity {
    uint id;
    string name;
    uint airePosts [];
    address payable author;
  }

  event AireCreated(
    uint id,
    string content,
    uint echos,
    uint mists, 
    address payable author
  );

  event AireEchoed(
    uint id,
    string content,
    address payable author
  );


  event AireMist(
    uint id,
    string content,
    address payable author
  );

  constructor() public {
    name = "to AIRE is to HUMAN";
  }

  function createAire(string memory _content) public {
    //require valid content
    require(bytes(_content).length > 0);
    airePosts[aireCount++] = Aire(aireCount, _content, 0, 0, msg.sender);
    //trigger event emit back to client
    emit AireCreated(airCount, _content, 0, 0, msg.sender);
  }

  function echoAire(uint memory _id) public {
    require(bytes(_id) > 0 && _id < echos);
    //figure how to append to their aire array the addresses of the aires instead of the content, otherwise it is duplication    
    Aire memory _aire = airePosts[_id];
    // string memory _content = _aire.content;
    // address payable _author = _aire.author;
    // address(_author).transfer(msg.value);
    msg.sender.airePosts[msg.sender.airCount++]= _aire.echos++;
    //check the async of this solidity line
    emit AireEchoed(_id, aire._content, msg.sender);
  }

  function mistAire(uint memory _id) pubic {
    require(_id > 0 && _id <= aireCount);
    Aire memory _aire = airePosts[_id];
    // address payable _author = _aire.author;
    _aire.mists++;
    emit AireMist(_id, _aire.content, msg.sender);
  } 
}