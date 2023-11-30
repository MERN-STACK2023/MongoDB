# Documents
- a document is a json file with one or more objects
- each object is a document/row of data
- each document has one or more key value pairs/fields
- documents are created using BSON(Binary JSON)
    - MongoDB converts the JSON data into BSON then stores it
    - we dont need to learn BSON because as developers we still use JSON format and MongoDB takes care of converting it to BSON and saving it to the disk
- MongoDB is schemaless, we can have documents with different structures in the same collection
## Document Ids
- when adding a documment, if you do not specify a `_id` field MongoDB will create one and assign it with an `ObjectID`
    - `_id`
- create `_id` field explicity `db.collectionName.insertOne({-id: 'unique-id-1', name: 'Rita', age: 33})`
- you cannot insert a document with an id that already exist

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