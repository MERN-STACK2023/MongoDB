# [Mongoose Data Validation](https://mongoosejs.com/docs/validation.html#built-in-validators)
- validation and sanitization is very important while doing backend development
- the backend application should be develop so that the input data is never accepted from the user as it is
    - we should always validate and sanitize the i8nput data
- **validation** checks if the input values coming in are in the right format and that required data is present for each field in our document schema
- **sanitization** ensures that the input data is clean of any malicious code that is trying to be injected into database or the application
    - unwanted characters and code are removed from the input data
- mongooses offers a powerful way to validate the data that comes into our models

## Mongoose Validation
- a validattor is just a function that returns true or false
    - false means thre is an error
    - true mean vallidationis correct and the input can be accepted
- validation is defined in the SchemaType
- validation is a `pre('save')`hook middleware, and it does not run on changes
- will always be the first `pre('save')`hook middleware
- `required: [true, 'Name is required']`
- maxlength(can only be used on string type): `maxlength: [100, 'Name must not be more than 100 characters']`
- minlength(can only be used on string type): `minlength: [5, 'Name must be at least 5 characters']`
- `min: 1` or `min:  [1, 'Age must be at 1 or more']` for numbers and dates
- `min: 3` or `min:  [3, 'Age cannot be more than 3 characters']` for numbers and dates
- enum: specifies vlaues that are acceptable for a field, cn only be used on string type
    - `enum: [value1, value2, vlaue3]`
    - ```
        enum: {
                values: ['Action', 'Adventure', 'Comedy', 'Thriller', 'Sci-Fi', 'Romance', 'Crime', 'Drama', 'Biography'],
                message: "This is not a validate Genre"
            }
        ```