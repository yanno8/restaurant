var mongoose = require('mongoose');
var Schema = mongoose.Schema;

adminSchema = new Schema( {
	
	username: String,
	password: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
}),
Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;