# MERN - M: MongoDB
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
## Non Relational Database(NoSQL) vs Relational Database(SQL)
- **Relational Database**
    - is a collection of one or more tables
    - a table contains one or more rows, so it is a colection of rows
    - a table row contains one or more columns
    - relational database is the best choice if the data is predictable in terms of structure, size and frequency of access
    - if relationship between entities are important then relation database are the best choice
    - the normalization reduces the size of the data on disk by limiting duplicate data and anomalies
- **Non Relational Database**
    - does not have tables
    - has collections and documents
    - a collection is a collection of one or more  documents
    - you can think of a collection as a table and documents as table rows
    - you should use if you want a flexible schema for the data that is in terms of shape or size or if it needs to be open to change in the future
    - designed from the ground up from the cloud, so they are good for horizontal scaling because lots of servers can be spun up to handle increase load
- [Learn More about SQL vs NoSQL ](./MongoDBBasics/SQLvsNoSQL.md)

## MongoDB
**MongoDB is a non relational database**
- a database contains is made up of one or more collections
- a collection is made up of one or more documents
- each document is made up of one or more fields
    - you can think of fields as columns(of a relational Database)
- document are created using BSON(Binary JSON)
    - so documents are BSON documents
    - we dont need to learn BSON because as developers we still use JSON format and MongoDb takes care of converting it to BSON and saving it to the disk
- [Learn More About JSON and BSON(Binary JSON)](./MongoDBBasics/JSONvsBSON.md)

- [Get Started With MongoDB](./MongoDBBasics/GettingStarted.md)
## MQL
- MongoDB query Language
- based on JavaScript
- data is eay to quey and you almost never need to use joins or transactions
- indexing is supported allowing you to retrieved documents fast