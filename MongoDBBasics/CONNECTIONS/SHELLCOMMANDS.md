# Common MongoDB Shell Commands

- `cls`
    - clears the shell

## Database
- `show dbs` 
    - Print a list of all databases on the server
    - will only show databases with at least one collection with at least one document
- `use <dbname> `
    - Switch current database to `<dbname>`
    - if the db does not exist, it will be created and used
- `db` 
    - Displays the current database
- `db.dropDatabase()`
    - Drops or removes db


## Collections
- `show collections` 
    - Prints the list of collections in the current database
- **Create Collection:**
    - `db.createCollection("collectionName")` Creates a new collection explicitly
        - takes and optional options second argument `db.createCollection("collectionName", {capped: booleanValue, autoIndexId: booleanValue})`
            - a capped collection is a fixed size collection that automatically overwrites its oldest entries when it reaches it maximum
                - when set to true we need to specify a size in bytes `{capped: true, autoIndexId: true, size: 6142567, max: 100}`, max is the maximum number of collections
            - autoIndexId default is false, if set to true it will create an index on the `_id`field
    - `db.collectionName.insertOne({key: value, key: value, key: value})` creates a collection(implicitly) and inserts a document into it
- **Delete Collection:**
    - `db.collection.drop()`, drops or removes the collection completely
- **Get all Document in a Collection:**
    - `db.collectionName.find()`, will return all documents insdie of the collection


________________________________________________________________   
- `db.createCollection()` 
- `db.collection.createIndex()` 
    - Create a new index on the collection if the index does not exist; otherwise, the operation has no effect

## Date
- ISODate: date
	- `new Date()`: current date and time
- Timestamp: used mostly internally, but you can use it
	- `new Timestamp()`: current time

- `db.stats()`: utility operator that give us the stats of a db
	- gives info such as number of collections, total size, average object size etc.....