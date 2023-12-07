# [Mongoose Middleware](https://mongoosejs.com/docs/middleware.html)
- can use to execute some logic between two events
- also called pre and post hooks, because we can execute them before or after something happens
- Pre Hook: `pre('eventName', function(next){})`
- Post hook: `post('eventName', function(doc, next){})`
- can execute multiple pre and post hooks
- can use regex to specify event name
    - `movieSchema.pre(/^find/, function (next) {}` using regex to execute middleware before any query method that start with `find`
## Document Middleware
- can use to execute some logic between two events
    - Example: each time a document is saved in the database we can run a function between the save command and the actual saving of the document or we can run some logic after the document is saved


## Query Middleware
- allows us to run functions before or after a query is executed