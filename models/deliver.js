var mongoose = require('mongoose');
var Schema = mongoose.Schema;

deliverSchema = new Schema( {
	
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
Deliver = mongoose.model('Deliver', userSchema);

module.exports = Deliver;