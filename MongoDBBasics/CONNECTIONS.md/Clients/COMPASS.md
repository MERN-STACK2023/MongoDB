# Connect Using MongoDB Compass
- GUI(Graphical User Interface) for querying, visualizing and modifying database data
    - issues the same commands to the database server as the MongoDB Shell
- [Click here](https://www.youtube.com/watch?v=7jH__3ieGS0) to be taken to a video that will show you how to do this. Start at the 24:26 mark
___________________________________________________________________________

1. Sign into your MongoDB account
2. Go to the Databases tab and click connect
3. Select **Connect Using MongoDB Compass**
4. Click **I don't have MongoDB Compass installed**
    - select operation system
    - click Download Compass and complete installation
    - once it is installed clikc the **I have MongoDB Compass installed**
    - select the version that you have and copy the connection string
5. Go to MongoDB Comapss
- **New Connection**
    - if you do not see the new connection page click Connect ---> New Conection from menu
    - [Remote Server/Atlas Connection](./REMOTE.md)
    - [Local Server Connection](./LOCAL.md)
    
   
        
__________________________________________
   - **Local Installation:** when you install mongodb sever and check the check box for install as service it created a servcie that runs in the background, so mongoDB uses this severice with the connection string `mongodb://localhost:27017`
        - if you do not have Mongodb installed as service you can open the command prompt and run `mongod` to start the process in the background and it will be able to identifyy the connection string `mongodb://localhost:27017`