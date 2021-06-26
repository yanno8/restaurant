var mongoose = require('mongoose');
var Schema = mongoose.Schema;

orderingSchema = new Schema( {
	
    unique_id: Number,
	firstName: String, 
	lastName: String,
	email: String,
    telephone: Number,
    place: String,
    time: String,
    city: String,
    confEmail: String,
    table: Number,
    foods: String,
    title: String,
    date: Date,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}),
Ordering = mongoose.model('Ordering', orderingSchema);

module.exports = Ordering;