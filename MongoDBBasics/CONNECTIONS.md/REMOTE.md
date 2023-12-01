## MongoDB Atlas
- database as aservcie provider
- allow us to keep our data in the clound
- we do not have to export data from the local database to upload it to Atlas when we get ready to deploy
- fully managed cloud on AWS, Azure or GCP(Google Cloud Platform)
- will give you a remote Database hosted on Atlas

### Using MongoDB Atlas
1. Go to [Atlas](https://www.mongodb.com/atlas)
- Sign up for an account

2. Create Cluster(Instance of Database)
- Click the **Build A Database** Button
- Use the Free **Shared** option tomlearn and explore MongoDB in a Cloud environment
- Choose a Cloud Provider & Region
- Give the cluster a name

3. Create Database User
**Onces you are in Atlas us the QuickStart option**
- **How would you like to authenticate your connection?** Username and Password

4. Add Ip address of your computer or device
- **Where would you like to connect from?** My Local Environment
    - add address manually or you can click the **Add My Current IP Address** Button
- **You can White List All IP addresses**
    - Click Network Access Page ---> Add IP Address button ---> Allow access from anywhere
- Click**Finish and Close** you should get a **Congratulations on setting up access rules!** message
__________________________________________
### Connect Mongo Cluster
- Databases ---> Click Cluster name to open ---> Connect button
- Choose An Option
    - **[Connect Using MongoDB Compass:](./Compass.md)**
    - **[Connect with the MongoDB Shell:](./SHELL.md)**
        - [Click here](https://www.youtube.com/watch?v=7jH__3ieGS0) to be taken to a video that will show you how to do this. Start at the 4:30 mark
- **Connect to your application:** connect to an application that is built using any technology
    