# Unwind Stage
- to define these stages we need to pass an array or objects to the `aggregate()` function
    - `aggregate([{}, {}, {}])`, each object is a different stage
- **`$unwing: 'field`** accepts a field that contains an array of values
- those values will be destructured, and for each item in the array a document based on the original document will be returned

```
{
    "name": "Divergent",
    "genres": [
        "Action",
        "Adventure",
        "Romance",
        "Sci-Fi"
    ],
}
```
- for the above document `{$unwind: '$genres'}` will return 4 documents
```
{            
    "name": "Divergent",
    "genres": "Action",
},
{            
    "name": "Divergent",
    "genres": "Adventure",
},
{            
    "name": "Divergent",
    "genres": "Romance",
},
{            
    "name": "Divergent",
    "genres": "Sci-Fi",
},
            
```
- [Aggregation Pipeline Operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)
