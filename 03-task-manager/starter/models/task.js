/* jshint esversion: 8 */
/* jshint node: true */

const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'MUST PROVIDE A NAME!'],
        trim:true,
        maxlength:[20, 'NAME CANNOT BE MORE THAN 20 CHARACTERS'],
    },
    completed:{
        type:Boolean,
        default:false,
    }
});


module.exports = mongoose.model('Task', TaskSchema);