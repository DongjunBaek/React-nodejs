const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchma =  mongoose.Schema({
    writer : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type : String,
        maxLength : 50

    },
    description : {
        type : String
    },
    price : {
        type : Number,
        defualt : 0
    },
    images : {
        type :Array,
        default : []
    },
    sold : {
        type : Number,
        maxLength : 100,
        default : 0
    },
    continents : {
        type : Number,
        defualt : 1
    }
    ,
    views : {
        type : Number,
        default : 0
    }


}, {timeStamp : true});

const Product = mongoose.model('Product', productSchma);

module.exports = { Product }