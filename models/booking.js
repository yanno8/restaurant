var mongoose = require('mongoose');
var Schema = mongoose.Schema;

bookingSchema = new Schema( {
	
    unique_id: Number,
	firstName: String, 
	lastName: String,
	email: String,
    telephone: Number,
    time: String,
    city: String,
    confEmail: String,
    table: Number,
    title: String,
    date: Date,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}),
Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;