# Adding Document to Database

## Method 1: using new Object and save Method
1. Create a `new Document object`
        ```
            const testMovie = new Movie({
                name: 'Avatar',
                description: 'The indigenous people and the humans',
                duration: 160,
                rating: 5.0
            })
        ```
2. Save the document to the database using `save()` method, which returns a promise
        ```
            testMovie.save()//returns a promise
            .then(document => {
                console.log(document)
            })
            .catch(err => {
                console.log("Error occured: " + err)
            })
        ```

## Method 2: Calling the create() method on the  object
- `CollectionName.create()`  method, which returns a promise
### with then and catch

```
    Movie.create(req.body).then(document => {
            console.log(document)
        })
        .catch(err => {
            console.log("Error occured: " + err)
        })
```

## with async/await
```
const addMovie = async (req, res) => {
    try {//handles the resolves
        const movie = await Movie.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                movie
            }
        })
    } catch (error) {//handles reject
        res.status(400).json({
            status: 'Failed',
            message: error.message
        })
    }

  
}
```