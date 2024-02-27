# [Document Middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)
- can use to execute some logic between two events
    - Example: each time a document is saved in the database we can run a function between the save command and the actual saving of the document or we can run some logic after the document is saved
- can execute multiple pre and post hooks
- for a list of events that can be use go to the [Mongoose documentation](https://mongoosejs.com/docs/middleware.html#types-of-middleware)

## Pre Hook
- `movieSchema.pre('save', function(next){})`, executing a pre hook middleware on the save event
    - happens before document is saved

## Post Hook
- `movieSchema.post('save', function(doc, next){})`, executing a post hook middleware on the save event
    - happens after the document is saved, so the function will not have access to the this keyword
    - the function receives the curently saved document and the next method

- [Example Document Middleware]()