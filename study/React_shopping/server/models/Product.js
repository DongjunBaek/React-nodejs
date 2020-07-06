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

//mongoDB weight 관련 정보 확인 in Search 
productSchma.index({
    title : 'text',
    description : 'text'
}, {
    weights : {
        title : 5,
        description : 1
    }
})

const Product = mongoose.model('Product', productSchma);

module.exports = { Product }