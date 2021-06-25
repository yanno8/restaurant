var mongoose = require('mongoose');
var Schema = mongoose.Schema;

waiterSchema = new Schema( {
	
	matricule: Number,
	email: String,
	username: String,
	phone: Number,
	address: String,
	password: String,
	firstName: String,
	lastName: String,
	birthday: Date,
	birthdayPlace: String,
	passwordConf: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}),
Waiter = mongoose.model('Waiter', userSchema);

module.exports = Waiter;