# Documents
- a document is a json file with one or more objects
- each object is a document/row of data
- each document has one or more key value pairs/fields
- a document maximum size is 16 mega bytes
- documents are created using BSON(Binary JSON)
    - MongoDB converts the JSON data into BSON then stores it
    - we dont need to learn BSON because as developers we still use JSON format and MongoDB takes care of converting it to BSON and saving it to the disk
- MongoDB is schemaless, we can have documents with different structures in the same collection
## Document Ids
- when adding a documment, if you do not specify a `_id` field MongoDB will create one and assign it with an `ObjectID`
    - `_id`
- create `_id` field explicity `db.collectionName.insertOne({-id: '1', name: 'Rita', age: 33})`
- you cannot insert a document with an id that already exist
- **Get all Document in a Collection:**
    - `db.collectionName.find()`, will return a cursor, cursor points to batches of documents
    - this method does not return a list, it returns a pointer to a list of documents called **Cursor**
    - **Cursor** is an object that pointer to a batch of document
    - does not return all document at once but document are returned in batches, called cursor
    - in the Shell we can use `it` to request the next batch

## Inserting Documents
- `insertOne({})`: insert one document in a collection
    - `db.collectionName.insertOne({name: "Rita", age: 34, gender" "female"})`
- `inserMany([{}, {}])`: insert multiple documents in a collection
    - `db.collectionName.insertMany([{name: "Rita", age: 34, gender" "female"}, {name: "Rayan",  gender" "male"},  {name: "Jenny", age: 22}])`
- `db.collectionName.insert()`: AVOID USING, this method is considered deprecated in most of the language driver
    - `db.collectionName.insert({name: "Rita", age: 34, gender" "female"})`: insert one document
    - `db.collectionName.insert([{name: "Rita", age: 34, gender" "female"}, {name: "Rayan",  gender" "male"},  {name: "Jenny", age: 22}])`: insert multiple documents

## Fetch Documents
- `db.collectionname.findOne()`:gets first document in collection
    - `db.collectionName.findOne({filter})`: gets first document that matches the filter
    - `db.collectionName.findOne({name: "Rita"})`: gets the first document with the name Rita
- `db.collectionName.find()`: gets all documents in a collection
    - `db.collectionName.find({filter})`: gets all the documents that matches the filter
    - `db.collectionName.find({gender: female})`: gets all the documents with the gender as female
    - you can remove fields from the results by setting the feild to `false` or `0`
        - `db.collectionName.find({name: "Rita"}, {_id: false, gender: 0})`
        - returns the documents without the id and gender fields
        - you can also specify fields you want in the result
        - the `findOne()` method also
    - to print a formatted result use the `pretty()` method(can only be used on the `find()` method)
        - `db.collectionName.find({name: "Rita"}, {_id: false, gender: 0}).pretty()`
        - `pretty()` can be only used on a cursor and the find method returns a cursor

## Updating Documents
- `db.collectionName.updateOne()`: updates a document that match the filter
    - updates a single document
    - if more than one document matches the filter it will only update the first matching document
    - `db.collectionName.updateOne({name: "Rita"}, {$set: {age: 25, city: "Las Vegas"}})`: the document that has the name Rita, age and city fields will be updated with the specified values
- `db.collectionName.updateMany()`: updates all the documents that match the filter
    - `db.collectionName.updateMany({name: "Rita"}, {$set: {age: 25, city: "Las Vegas"}})`: all the documents that have the name Rita, age and city fields will be updated with the specified values
- if you try to update a field that does not exist in a document, it will add the field to that document


## Deleting Documents
- `db.collectionName.deleteOne({})`: will delete the first document in a collection
    - `db.collectionName.deleteOne({name: "Rita"})`: deletes first document where name is Rita
- `db.collectionName.deleteMany({name: "Rita"})`: delete all documnets where name is Rita
    - `db.collectionName.deleteMany({})`: will delete all documents from a collection
- `db.collectionName.remove({name: "Rita"}, true)` this method is deprecated, will delete the first document that has the name Rita, the second argument true means you only want one document deleted
    - `db.collectionName.remove({name: "Rita"}, false)` or `db.collectionName.remove({name: "Rita"})`: will delete all documents where name is Rita
    - `db.collectionName.remove({})`: deletes all the documents from a collection

## Cursor Methods
- `db.collectionName.find()`, will return a cursor, cursor points to a batch of documents
- in the Shell we can use `it` to request the next batch/cursor
- if we are working with a programming languages such as PHP or Nodejs, we need to use the cursor methods for those languages
    - `db.collectionName.find().toArray()` the find method returns a cursor and the toArray method request the next batch/cursor, therefore more documents will be returned
    - `db.collectionName.find().foreach(function(customer), {print("customer name" + cust.name)})` the find method returns a cursor and the forEach will loop over each document and when it reaches the last document it will request for next batch/cursor



({filter}, {})