# [Aggregation Middleware](https://mongoosejs.com/docs/middleware.html#types-of-middleware)
- allows us to run functions before and after a aggregation happens
- `this` keyword points to the currently processing aggregation object
- the aggregation object has a method called pipeline, that returns the complete pipeline as an array
    - `this.pipeline()`
    - you can use JS array methods to add stages to the pipeline