const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;


var leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true,
        default: ''
    },
    abbr: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default:false      
    }
 
}, {
    timestamps: true,
     usePushEach: true // include this to prevent console error MongoError: Unknown modifier: $pushAll
});


var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;