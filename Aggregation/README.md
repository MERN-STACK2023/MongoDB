# Aggregation
- aggregation is a relationship between two classes that represent a whole part or a "has a" association
    - form of association where one class is composed of one or more instance of another class, but the relationship is not strictly exclusive and the child objects can exist without the parent object
    - one class(the aggregate) has a reference to another class(the component)
    - the reference implies a connection or dependency between two classes
- allows one class to contain objects of another class, but the objects can exist independently

# [MongoDB Aggregation Pipeline](https://www.mongodb.com/docs/manual/reference/operator/#std-label-operator-ref-landing)
- powerful MongoDB framework for data aggregation
- you can create a pipeline in which all the documnets in a collection will go through and be processed step by step in order to transform them into a aggregated result
- can use to calculate averages, minimun and maximum value, sum, count etc...
- the Mongoose function`aggregate()` allows us to use the MongoDB Aggregation Pipeline
- the documents/data has to go through different stages of the pipeline so we can manipulate the data in order to aggregate it
- to define these stages we need to pass an array or objects to the `aggregate()` function
    - `aggregate([{}, {}, {}])`, each object is a different stage
- `aggregate([{$stagename: {dcoumentFields}])`, each object needs key value pairs `stagename` : `document fileds by which we want to filter the data

### [Pipeline Stages](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/)
- stages are chained so the second stage will be applied to the result of the first stage and the thrid stage will be applied to the results of the first and second stage
- so the result for each stage will be the input for the next stage
    - example if we have a grouping stage that specifies fields, and a sort stage that comes after the grouping stage, the sort stage must sort by the field spcified in the grouping stage
- [Aggregation Pipeline Operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)
- [Match](./Match.md):
- [Sort](./Sort.md): 
- [Group](./Group.md): used to group fileds together and perform some type of opration on them
- [Project](): sepcifies which fields we want in the results. 1 = fields you want, 0 = fields you do not want
    - `{$project: {_id: 0}}`
- [Unwind](./Unwind.md): destructures a field that contains an array
- [Addfields](./AddFields.md): add fields to the result
    - `{ $addFields: { genre: '$_id' } }`
- [Limit]()
    - `{$limit: 6}`limits the results to 6 documents