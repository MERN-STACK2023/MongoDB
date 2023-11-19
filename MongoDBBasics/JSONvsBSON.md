- **JSON(JavaScript Object Notation)**
    - text based
    - data is stored in `"key": "value"` pairs
    - values can be string, number boolean, an array or a nested JSON document
    - uses UTF-* String encoding so, both humans and machines can easily read it
    - popular format for storing and exchanging data between software systems

```
{
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
    //Nested JSON document(one to one relationship)
    "creator":{
        "name": "Lisa Willams",
        "employeeNumber": 7860487,
        "active": false
    },
    //Nested JSON document(one to many relationship)????
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},

    //Array
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
}
```



- **BSON(Binary JavaScript Object Notation)**
    - Binary JSON is a superset of JSON
    - uses Binary encoding so, only machines can read it
    - supports all the data types tha JSON supports plus, Integer, float, long, decimal128,date, raw binary
    - MongoDB stores data in BSON internally on the disk
    - BSON is the serialization format used in MongoDB
    - we dont need to learn BSON because as developers we still use JSON format and MongoDb takes care of converting it to BSON and saving it to the disk
        - in the JSON file you can use the additional data types provided by BSON but you do not have to worry about the internal BSON format. MongoDB takes care of it
    - **Why BSON**
        - JSON only support a limited number of basic data types(string, boolean, number, array)
        - JSON is a texted based format and parsing it is very slow, but database engines should be fast, so MongoDB uses BSON