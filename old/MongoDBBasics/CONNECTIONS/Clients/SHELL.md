# Install MongoDB Shell
interface for querying and modifying database data
- can also be used to perform administrator operations such as creating databases, collections etc...
- issues the same commands to the database server as MongoDB Compass
- [Click here](https://www.youtube.com/watch?v=7jH__3ieGS0) to be taken to a video that will show you how to do this. Start at the 4:30 mark


1. Install from: https://www.mongodb.com/try/download/shell
![MongoDB Shell](./images/shell.png);
2. Add connection string
- go to the file desination and open the `mongosh.exe` file
- it ask for a connection string and if no string is given then it will use the default
- hit enter and you should be connected to local server

- provides the DB by default admin, config, and local

# Test DB
- is default db, if no db is select then this is the db that will be used
[Common Database Shell Commands](./SHELLCOMMANDS.md)

________________________________

   - **Local Installation:** when you install mongodb sever and check the check box for install as service it created a servcie that runs in the background, so mongoDB uses this severice with the connection string `mongodb://localhost:27017`
        - if you do not have Mongodb installed as service you can open the command prompt and run `mongod` to start the process in the background and it will be able to identifyy the connection string `mongodb://localhost:27017`