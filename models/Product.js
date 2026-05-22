const mongoose = require ('mongoose');
const schema = mongoose.Schema;
const productSchema = new schema({
    name:String,
    price:Number,
    description:String,
    category:String,
    instock:Boolean,

    //creates an array of strings for tags
    tags:[String],
    createdAt  : {
        type: Date,
        default: Date.now
    }

});
