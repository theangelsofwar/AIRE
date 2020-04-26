Welcome to AIRE

A decentralized Application to Mock Twitter: Be Free To Say Your Thoughts Without Censorship by central authorities. 

Hack back your freedom of Speech into the Ether, and go on AIRE. 

For Free Thinkers who recognize the new Englightenment we are about to enter!

- Run by Solidity transactions on the Ethereum Blockchain

- to AIRE is to HUMAN; Freedom of Speech is a human right!
- POST functionality : AIRE your message into the Ether
  - non-blocking, non-censorship, nobody can get blocked off or reported by the platform, 
  - but there is a limit to how much you are allowed to AIRE for free every day, AIRE more than the limit and you can pay in ETH!
  - Followers can ECHO (analogous to a retweet) an AIRE, 
  - Follwers can MIST (analogous to like or "hear")
  - By the way, everyone is everyone's followers... 
Functionalities: See the Wiki



Configs:


What is The Graph Protocol is a way of indexing data on decentralized Blockchains. 
-You can create your own subgraph to meet the requirements of you dApp


Set Up Graph Protocal Cli https://thegraph.com/docs/define-a-subgraph#install-the-graph-cli

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

    If you are using Linux, I'm sorry. 
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


      graph init angiechangpagne/subgraph-aire
  4. deploy example smart contract to 
    
    write the contract - .sol
    > cd aire
    > truffle compile
    > truffle migrate

    If there is a migration issue, check that truffle.js config file matches the settings on Local Ethereum Net(Ganache). Switch from port 7545 to 8545

    Copy the account address from the Migration, this is the public address of the Contract: 0x0061Bd8aC3bE503b4422da5db980043839328588

    Deploys a GravatarRegistry smart contract to ganache
    Sets up sample data for protocol to index on

  5. Deploy Contract to Ganache(written in Solidity or Rust)
    Move to root dir 
    > sed -i -e \
    's/0x2E645469f354BB4F5c8a05B3b30A929361cf77eC/0x0061Bd8aC3bE503b4422da5db980043839328588/g' \
    subgraph.yaml
    
    > sed -i -e \
    's/0x2E645469f354BB4F5c8a05B3b30A929361cf77eC/0x0061Bd8aC3bE503b4422da5db980043839328588/g' \ subgraph.yaml

sed -i -e \
    's/0x2E645469f354BB4F5c8a05B3b30A929361cf77eC/<CONTRACT_ADDRESS>/g' \
    subgraph.yaml

sed -i -e \'s/0x2E645469f354BB4F5c8a05B3b30A929361cf77eC/0x0061Bd8aC3bE503b4422da5db980043839328588/g' \
    subgraph.yaml
  6. use subgraph in React dApp Client

I. Defining your own Subgraph

Creating a subgraph will create a custom scheme definition on which data to index from Ethereum and how it will be stored. After you deploy a subgraph, it will be permanently part of the global graph of blockchain data. 
- subgraph.yaml: Contains the subgraph manifest which determines the indexing
- schema.graphql: GraphQL schema that defines what data is stored and the shape of queries
- mapping.ts -AssemblyScript Mappings: AssemblyScript translates event data on Ether to graphQL fields in the schema with typescript.

II. Write Mappings
specVersion: 0.0.1
description: Gravatar for Ethereum
repository: https://github.com/graphprotocol/example-subgraph
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum/contract
    name: Gravity
    network: mainnet
    source:
      address: '0x2E645469f354BB4F5c8a05B3b30A929361cf77eC'
      abi: Gravity
      startBlock: 6175244
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.1
      language: wasm/assemblyscript
      entities:
        - Gravatar
      abis:
        - name: Gravity
          file: ./abis/Gravity.json
      eventHandlers:
        - event: NewGravatar(uint256,address,string,string)
          handler: handleNewGravatar
        - event: UpdatedGravatar(uint256,address,string,string)
          handler: handleUpdatedGravatar
      callHandlers:
        - function: createGravatar(string,string)
          handler: handleCreateGravatar
      blockHandlers:
        - function: handleBlock
        - function: handleBlockWithCall
          filter:
            kind: call
      file: ./src/mapping.ts

GraphQL Schema:

Define Entities:





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
    Queries will be translated from GraphQL using the Graph Node's endpoint and translated over through its internal indexing protocol. A great way of testing the queries is with this tool: https://chrome.google.com/webstore/detail/project-artemis/gpncgocimlpojfgbphndpjgkkhdjhnpb

  - Assembly Script(lower level language)



Client Side: Now Create the Client Side React App
> npx create-react-app aire-ether --typescript

Apollo GraphQL Schema and Apollo Server
aire-ether-apollo 



API Design:
1. AIRE = POST a tweet   api/AIRE
2. ECHO = POST a retweet 
3. VACUUM = DELETE and AIRE api/delete/?id
4. ETHER = GET ALL news Feed api/get
5. PROFILE = get user profile api/get/?id
6. MIST = Like an "AIRE", equvalent to "heart" , "like"

Aire.sol
ECHO-
  increment echoCount to a specific aireId, 
  while also appending the aireId's address to the entity's airePosts [] array
  entityId does not matter

  How is the Data Stored with Postgres on the Blockchain?
  - Use of IPFS(Interplanetary File Transfer) is peer to peer hosted, in the blockchain we are all each other's database. We will store each other's "AIREs" and everytime we post an "ECHO"(as in retweet) we re-reference the public hash address of that storage node. 

  - Because of the structure of the Blockchain, it is very difficult to tamper the truth of the data, as you need a majority of 51% to alter the true state. 





  “Let us advance on Chaos and the Dark”
― Ralph Waldo Emerson, Self-Reliance