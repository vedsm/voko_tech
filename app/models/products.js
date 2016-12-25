
/**
 created by chirag on 11/12/16.
*/

var mongoose = require('mongoose');

//defining schema for the products 
var productSchema = mongoose.Schema({
	productID: { type: String, unique: true },
	productName: String,
	rentPerMonth: Number,
	imageURL: String
});

// create the model for products and expose it to our app
module.exports = mongoose.model('Products',productSchema);

