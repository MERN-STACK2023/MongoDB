# [Mongoose Middleware](https://mongoosejs.com/docs/middleware.html)
- functions which are passed control during execution of asynchronous functions
    - can use to execute some logic between two events
- also called pre and post hooks, because we can execute them before or after something happens
- Pre Hook: `pre('eventName', function(next){})`
- Post hook: `post('eventName', function(doc, next){})`
- can execute multiple pre and post hooks
- can use regex to specify event name
    - `movieSchema.pre(/^find/, function (next) {}` using regex to execute middleware before any query method that start with `find`
- middleware is specified on the schema level
- there are 4 types of middleware: d
    - [Document Middleware](./DocumentMiddleware.md)
    - [Query Middleware](./QueryMiddleware.md): allows us to run functions before or after a query is executed
    - [Aggregation Middleware](./AggregationMiddleware.md): allows us to run functions before and after a aggregation happens
    - model middleware


## 
- 