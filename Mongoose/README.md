# [Mongoose](https://mongoosejs.com/docs/guide.html)
**An Object data modelling(ODM) library for MongoDB & Nodejs**
- **Object data modelling(ODM) library** a way for use to write JS code that will then interact with databse
- provides higher level of abstraction
- we can use MongoDB driver to access our databse from a nodejs application, but Mongoose gives us a lot more functionality than the MongoDB driver, which allows for faster and simpler development
- gives us schema to model our data and relationships, easy data validation, a simple query API, middleware etc....
- allow use to use a schema to model our data and create a model out of it that allows us to interact with the databse and perform CRUD operations

## Connect to MongoDB
[Server-File](./ReferenceCode/schema-document-server.js)
1. Install Mongoose in Application
-  `npm install mongoose`
2. Add Mongoose to application and connect to Database
- `mongoose.connect(connectionstring, connection options)` is used to connect to databas
    - **ConnectionString:** use environment variables to pass connection string to the connect function
        - `mongoose.connect(process.env.<Connection String>)`
    - **Connection Options:** object where we can set some options like deprecated warning messages
- `connect()` method will return a promise of a connection Object 
    - use then and catch to handle what happens with the connection

    
### Next Move To ➡ [Create Schema](./SCHEMA.md)


- [Mongoose Model/Schema](./SCHEMA.md)
- [CRUD](./CRUD/CommonMethods.md)
- [Virtual properties]()
- [Per and Post Hook](../Mongoose/Middleware/DocumentMiddleware.md#pre-hook)


