# Common methods
**The is a guide to some of the common mongoose methods used**



- `save()`, `create()`
## Find() method
- `let query1 = Movie.find();`find method returns a query object
    - so we can use mongoose [query methods](https://mongoosejs.com/docs/api/query.html) on query1
- `let query2 = await Movie.find();`: returns a result
    - since the await keyword is used the query will execute and come back with the result, so it is no longer a query that is being returned by the `find()` method
    - we can use JS methods on the result but not mongoose query method

- the `findById()` execute the `findOne()` under the hood
- `Date.now()` returs the current date and time in milliseconds
    - `{ releaseDate: { $lte: Date.now() } }`
    - the find method will convert it to the appropiate format to do the comparsion: `2023-12-07T19:34:17.394+00:00`
    - but `new Date()` constructor returns the current date and time like so `2023-12-07T19:34:17.394+00:00` automatically 