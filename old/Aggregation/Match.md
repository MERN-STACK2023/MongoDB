# Match Stage
- to define these stages we need to pass an array or objects to the `aggregate()` function
    - `aggregate([{}, {}, {}])`, each object is a different stage
- **`$match: {field: {$operator: value}}`**, used to match or filter certain documents
    - `aggregate([{$match: {ratings: {$gte: 5}}}])`, match all the fields that have a rating greater than or equal to 5

- [Aggregation Pipeline Operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)

### Keep In Mind That
- stages are chained so the second stage will be applied to the result of the first stage and the thrid stage will be applied to the results of the first and second stage
- so the result for each stage will be the input for the next stage
    - example if we have a grouping stage that specifies fields, and a sort stage that comes after the grouping stage, the sort stage must sort by the field spcified in the grouping stage