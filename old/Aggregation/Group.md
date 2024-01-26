# Group Stage
- to define these stages we need to pass an array or objects to the `aggregate()` function
    - `aggregate([{}, {}, {}])`, each object is a different stage
- **`$group: {_id: fieldToGroupBy, field: {$operator: field/value}}`** groups all document together by the field specified in the `_id` field
    - `aggreate([{$group: {_id: null, avgRating: { $avg: '$ratings' },avgPrice: { $avg: '$price' }, minPrice: { $min: '$price' },   totalPrice: {$sum: '$price'}, count: {$sum: 1}}}])`
        - we first need to specify the `_id:` field, it specifies what we want to group by
            - setting `_id: null`  will allow us to have everything in one group so we can calculate all results together and not by groups, so grouping will be applied on all the documents
            - setting `_id: '$releaseYear'` grouping based on `releaseYear` will allow us to group all results by release year
        - `avgRating`, `avgPrice`, `minPrice`, and `totalPrice`, and `count` will be fields in the result
        - `count: {$sum: 1}` value will initially be 0, 1 will be added everytime a document goes through the pipeleine
- [Aggregation Pipeline Operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)

### Keep In Mind That
- stages are chained so the second stage will be applied to the result of the first stage and the thrid stage will be applied to the results of the first and second stage
- so the result for each stage will be the input for the next stage
    - example if we have a grouping stage that specifies fields, and a sort stage that comes after the grouping stage, the sort stage must sort by the field spcified in the grouping stage