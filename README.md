# [MERN - M: MongoDB](https://www.mongodb.com/docs/manual/introduction/)
- Muti-cloud document database service(document oriented database)
- Performance: the speed at which a collection is queried is very fast without 
- Flexibility: very easy to make structural changes without wreaking havac, it like adding a new property to a object
- Scalability: can support large databases with high request rates at a very low latency
- Usability: can get up and running in the cloud very fast
 - stores data in collections
    - collections holds all the data about an object(Example object would be a user)
    - this data is not broken into related tables like in SQL or relational DBs
    - duplicating and distributing the data where deemed mecessary in a no sql structure is allowed
 - individual records are called documents
    - documents have a key/value structure and look like json
______________________________________________________________________
## MongoDB
**MongoDB is a [non relational database](./MongoDBBasics/SQLvsNoSQL.md)**
- a database contains is made up of **one or more collections**
- a collection is made up of **one or more documents**
- each document is made up of **one or more fields**
    - you can think of fields as columns(of a relational Database)
- document are created and stored using BSON(Binary JSON)
    - so documents are BSON documents
    - we dont need to learn BSON because as developers we still use JSON format and MongoDb takes care of converting it to BSON and saving it to the disk
- [Learn More About JSON and BSON(Binary JSON)](./MongoDBBasics/JSONvsBSON.md)
- MongoDB has two types of connection [local](./MongoDBBasics/LOCALCONNECTION/README.md) and [remote](./MongoDBBasics/REMOTECONNECTION/README.md)


## MQL
- MongoDB query Language
- based on JavaScript
- data is eay to quey and you almost never need to use joins or transactions
- indexing is supported allowing you to retrieved documents fast

### Mongoose



### Next Move To ➡ [Getting Started with MongoDB](./MongoDBBasics/GettingStarted.md)


## Table Of Contents
-[MongoDB Shell](./Shell/README.md)
-[MongoDB Compass](./Compass/README.md)
-[JSON vs BSON](./MongoDBBasics/JSONvsBSON.md)
-[SQL vs NoSQL](./MongoDBBasics/SQLvsNoSQL.md)
-[Getting Started](./MongoDBBasics/GettingStarted.md)
-[]()
-[]()
-[]()
-[]()
-[]()
-[]()
-[]()
-[]()
-[]()
-[]()
-[]()