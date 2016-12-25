/**
 * Created by ved on 28/11/16.
 */
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String
});



// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

