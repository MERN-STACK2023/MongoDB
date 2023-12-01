# JSON vs BSON

## JSON(JavaScript Object Notation)
- text based
- data is stored in `"key": value` pairs
- values can be string, number boolean, array, null, undefined or a nested JSON document
- uses UTF-* String encoding so, both humans and machines can easily read it
- popular format for storing and exchanging data between software systems

![JSON](../images/JSON.png) 

## BSON(Binary JavaScript Object Notation)
- Binary JSON is a superset of JSON
- uses Binary encoding so, only machines can read it
- supports all the data types that JSON supports plus, Integer, float, long, decimal128,date, raw binary
- MongoDB stores data in BSON internally on the disk
- BSON is the serialization format used in MongoDB
- we dont need to learn BSON because as developers we still use JSON format and MongoDb takes care of converting it to BSON and saving it to the disk
    - in the JSON file you can use the additional data types provided by BSON but you do not have to worry about the internal BSON format. MongoDB takes care of it

### Why BSON
- **Additional Data Types** BSON supports all the data types that JSON supports plus, Integer, float, long, decimal128,date, raw binary
	- JSON only support a limited number of basic data types(string, boolean, number, array)
	- we can use BSON data types with our JSON objects, JSON does not understand it but BSON does, the `ObjectId()` is an example
- **Faster** storing and fetch BSON data is faster and more efficient
- JSON is a texted based format and parsing it is very slow, but database engines should be fast, so MongoDB uses BSON

