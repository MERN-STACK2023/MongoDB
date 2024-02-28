# Connecting to Server from Node App(Client)
**You can connect to an application that is built using any technology**

## Connecting to Remote Database/Atlas(Server) from Node App(Client)
1. Go to Atlas and Select the cluster you want to connect to
    - Click the Connect
    - Select 
        - **Driver:** Nodejs
        - **Version:** the version that applies to your version of Nodejs
        - **Install MongoDB in your project:** `npm install mongodb`
            - You may want to install mongoose also, it is a popular MongoDB driver: `npm install mongoose`
        - Copy Connection String and add it into your application code
            - you should add this in a `.env` file as a enviroment variable and make sure you have a `.gitignore` file if you are using github
            - relapce the placeholders for username and password with your credentials
            in the connection string after `mongodb.net/` add the database name: `mongodb.net/datbasename.......`

## Connecting to Local Computer(Server) from Node App(Client)
- Copy Connection String and add it into your application code: `mongodb://localhost:27017/databasename`
    - you should add this in a `.env` file as a enviroment variable and make sure you have a `.gitignore` file if you are using github

### Next Move To ➡ [Connecting with Express](Add express url after github push Express Databses MongoDB Readme)