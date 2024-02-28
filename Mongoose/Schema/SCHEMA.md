# Mongoose Schema
- VS Code Extension: Mongo Snippets for Node-js
    - `!mdbgum`: generates a userSchema

    
# 1. Create a Schema
- Create a schema `new mongoose.Schema({object literal}, {object of options})`
- used to create documents
```
const movieSchema = new mongoose.Schema({
    name: String,
    description: String,
    duration: Number,//Minutes
    rating: Number//will be saved as type double in MongoDB: but in JS we only have Number
})

```


## Schema with schema type options
- schema type options defines the type, default value, if the field is required or not, if the field should be unique, etc....
- we can define schema type options for some of the fileds
```
const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        //required is a validator, used to validate the data
        required: [true, 'Name is required field!'],//with validation
        unique: true
    },
    description: String,
    duration: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 1.0
    }
})
```


# 2. Create a model 
- Creates a model: `mongoose.model('modelName', schemaName)`
- based on the schema a model can be created
- `const Movie = mongoose.model('Movie', movieSchema);`
- can be used to perform CRUD operations on documents
- the `modelName` will be used as the collection name in the database
    - in the plural form `Movies` 
    - Variable should start with a capital letter

# 3. Configure code to perform CRUD operations
- [CREATE](./CRUD/CREATE.md)
- [READ](./CRUD/READ.md)
- [UPDATE](./CRUD/UPDATE.md)
- [DELETE](./CRUD/DELETE.md)