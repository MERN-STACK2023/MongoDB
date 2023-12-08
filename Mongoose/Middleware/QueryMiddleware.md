# [Query Middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)
- executes when you call `exec()`, `then()` or `await` on a Query object
- `this` keyword refers to the query object
- for a list of events that can be use go to the [Mongoose documentation](https://mongoosejs.com/docs/middleware.html#types-of-middleware)
- when the query method is `find` it will return all the documents
- `movieSchema.pre(/^find/, function (next) {}` using regex to execute middleware before any query method that start with `find`
    - `find`, `findOne`, `findOneAndDelete`, `findOneAndReplace`, `findOneAndUpdate`
    - `this` will refer to all the documents if the method is find and one document if any of the others
## Pre Hook
- `movieSchema.pre('find', function(next){})`, executing a pre hook middleware on the find event
    - happens before document is returned

## Post Hook
- `movieSchema.post('findOne', function(doc, next){})`, executing a post hook middleware on the findOne event
    - happens after the document is saved, so the function will not have access to the this keyword
    - the function receives the curently saved document and the next method
- [Example Query Middleware]()