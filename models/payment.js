var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 paymentSchema = new Schema({

    name: String,
    price: Number,
    currency: String,
    phone: Number,
    paymentid: String,
    lastupdatetime: Date,
    status: String,
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})

Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment