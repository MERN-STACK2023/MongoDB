# Mongoose Schema
- `new mongoose.Schema({object literal}, {object of options})`



## Virtual Properties
- fields that we can define that will not be persisted/saved in the database
- ususally are derivied from an existing field
- Ex. virtual property age can be derived from the date of birth field 
- `movieSchema.virtual('hours').get()`
    - get method is used to create the virtual property each time we get data from the database
- the get function receives a callback function that must use the regular function syntax
    - cannot be a arrow function because it does not get its own `this` keyword
    - with a regular function we can use the`this` keyword, which gets assigned with the object which it is being used with
- `movieSchema.virtual('hours').get(function () {return this.duration/ 60});`
    - `this.duration` will refer to the duration field of the current document
- in order to display a virtual field in the output we need to specify it in the schema, as the second argument(object of options)
    - `toJSON: {virtuals: true}`
        - when we are getting the data in the form of JSON we want the virtual fields to be displayed
- when we ouput the data as an object we want to have the field, so that we can use it in our code
    - `toObject: { virtuals: true }`
- since virtual properties are not technically part of the database you cannot use them when querying data
    - `Movies.find({hours: 3})`, this will not work


## Field attributes
- `select: false`: field will not be returned



- [Example Schema](https://github.com/MERN-STACK2023/Express-RestAPI/blob/main/RestfulAPI/Models/movieModel.js)