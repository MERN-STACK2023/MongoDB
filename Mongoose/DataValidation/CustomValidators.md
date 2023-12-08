# Custom Validators
- a validattor is just a function that returns true or false
    - false means thre is an error
    - true mean vallidationis correct and the input can be accepted

```
ratings: {
        type: Number,
        //CUSTOM VALIDATOR
        validate: {
            validator: function (value) {//will get the value we need to validate
                return value >= 1 && value <= 10;
                //because this keyword refers to the current document if we use this.value 
                    //it would only work for creating new document but not updating
                //return this.value >= 1 && this.value <= 10;
                
            },
            message: 'Ratings should be not be above 10 or below 1, but user input was ({VALUE})'
        },
}
```
## Custom Validator Libraries
- there are libraries available in npm for data validation, that can be plugged in as custom validators, one such library is 
- [**Validator.js**](https://github.com/validatorjs/validator.js): can only be used on string values, most validator are already in Mongoose but there are some thatare not