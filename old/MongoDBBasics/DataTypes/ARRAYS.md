# Array
![Embedded Documents](../../images/arrays.png)

- get all colection where address id London
    - `db.collectionName.find({address: "London"})`

- get all the customer who purchased Samsung
    - `db.collectionName.find({"purchase.name": 'Samsung'})`