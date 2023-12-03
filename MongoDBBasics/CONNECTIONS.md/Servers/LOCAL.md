# MongoDB Windows Installation

### Go to [MongoDB](https://www.mongodb.com/) and Install MongoDB Server
- Products --> Community Edition --> MongoDB Community Server Download
- Select and install the msi package
- ![Setup 1](./images/setup1.png)
- ![Setup 2](./images/setup2.png)
- **Install as a Service**
    - This is what creates your local server: `mongodb://localhost:27017`
    - Installs Mongodb as a service which runs in the background and allows you to communicate with the server
    - from the start menu type `Service` and click on it and it will show you a lit of services running in the background, you can start and stop the services
    - if you do not installed as service you can open the command prompt and run `mongod` to start the process in the background and it will be able to identifyy the connection string `mongodb://localhost:27017`
- **Data Directory:** where Mongodb stores the data somewhere on your computer and manages it for you
- **Log Directory:** log files will be stored here
- You may or may not need Compass
- Finish Install
____________________________________________________________________

### To work with MongoDB Server we need a Client
- **[Connect Using MongoDB Compass:](./Compass.md)**
- **[Connect with the MongoDB Shell:](./SHELL.md)**
- **[Connect to your application:]** connect to an application that is built using any technology

 

![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()
![]()

