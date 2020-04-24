Welcom to AIRE

A decentralized Application to Mock Twitter: Be Free To Say Your Thoughts Without Censorship by central authorities. 

Hack back your freedom of Speech into the Ether, and go on AIRE. 

For Free Thinkers who recognize the new Englightenment we are about to enter!

- Run by Solidity transactions on the Ethereum Blockchain

- to AIRE is to HUMAN; Freedom of Speech is a human right!
- POST functionality : AIRE your message into the Ether
  - non-blocking, non-censorship, nobody can get blocked off or reported by the platform, 
  - but there is a limit to how much you are allowed to AIRE for free every day, AIRE more than the limit and you can pay in ETH!
  - Followers can ECHO (analogous to a retweet) an AIRE, 
  - 
Functionalities: See the Wiki



Configs:


What is The Graph Protocol is a way of indexing data on decentralized Blockchains. 
-You can create your own subgraph to meet the requirements of you dApp


I. Set Up Graph Protocal Cli https://thegraph.com/docs/define-a-subgraph#install-the-graph-cli

 -if you aren't interested in the theory behind this and simply want to create a subgraph for you smart contract, simply go to quickstart

 Quick Start:
  1. set up Ganache CLI 
    > npm install -g truffle ganache-cli
    > ganache-cli -h 0.0.0.0, by default, Ganache will bind to 127.0.0.1
      the -h is necessary for Docker image
  2. start local Node Graph
    > git clone https://github.com/graphprotocol/graph-node/
      clone a graph node
    > cd graph-node/docker

    If you are using Linus, I'm sorry. 
    https://thegraph.com/docs/quick-start#local-development

    Open Docker Desktop
    > docker-compose up
    Notice the Graph Protocol uses Postgres for it's underlying database
    You should get a confirm message that the database is ready to accept connections

  3. initialize new subgraph instance
    > npm install -g @graphprotocol/graph-cli

    Create the instance in the root of the project:
    > graph init --from-example <GITHUB_USERNAME>/<SUBGRAPH_NAME> [<DIRECTORY>]
      graph init --from-example angiechangpagne/aire

  4. deploy example smart contract to 
    
    write the contract - .sol
    > truffle compile
    > truffle migrate

    Deploys a GravatarRegistry smart contract to ganache
    Sets up sample data to index on

  5. Deploy Contract to Ganache(written in Solidity or Rust)
    > sed -i -e 
  6. use subgraph in React dApp Client

II. Write Mappings









Potential Other Networks
1. local testnet: Ganache
2. closure scope for injecting Web3: Metamask
3. Ethereum testnets: Ropsten, Rinkeby, Kovan 
3. Production: mainnet(require ETH)

Writing Contracts:
1. Which language?
  a. Solidity(.sol)
  b. Rust(.rs)
2. Contracts
  a. fields-uint
  b. Solidity Structures
    i. constructor
    ii. struct
  c. mappings(arrays)
  d. events and calls
    i. CRUD functions
    ii. handlers for CRUD functions
Migrations
1. Analogy to Redux - Since the blockchain data structure is immutablem, after handling an event to check for validity(proof if work mechanism) between public keys and transactions it processes the state by creating a new block, a migration(this is not a mutation, but a shift of a state)





Folder Structure:
- AIRE
  - Subgraph
  - AIREA(Client from npm create-react-app airea --typescript)
  - Contracts
  - Migrations



  Communicating Client Side to Smart Contracts
  - graphql
  - Assembly Script(lower level language)



  How is the Data Stored with Postgres on the Blockchain?
  - Use of IPFS(Interplanetary File Transfer) is peer to peer hosted, in the blockchain we are all each other's database. We will store each other's "AIREs" and everytime we post an "ECHO"(as in retweet) we re-reference the public hash address of that storage node. 

  - Becaues of the structure of the Blockchain, it is very difficult to tamper the truth of the data, as you need a majority of 51% to alter the true state. 