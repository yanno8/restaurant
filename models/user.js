var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
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
User = mongoose.model('User', userSchema);

module.exports = User;