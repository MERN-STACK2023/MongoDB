# Connect Database(Mongo DB)
1. In the `config` folder create `dbConnect.js` file
- add the folowing code to get connection started
- create a environment variable in the `.env` file to hold your connection string and pass the environment variable to the dbConnect file connect function `process.env.VARIABLE_NAME`
    - you do not need to create the database or collection in MongoDB
    - add the name of your database to the end of the connection string in the `.env` file
        - the database and collection will be created when you create a document for the first time
    - [How to get your connection string](../MongoDBBasics/CONNECTIONS/Clients/COMPASS.md)
        ```
        const {default: mongoose} = require('mongoose');

        const dbConnect = () => {
            try {
                const conn = mongoose.connect(process.env.MONGODB_URL);
                console.log("Database Connected Successfully");
            } catch(error) {
                    console.log("Database Error");
            }

        };

        module.exports = dbConnect;
        ```
2. In the server file invoke the connection
-`dbConnect();`
3. Run Server
    - you should see **Database Connected Successfully** in the console