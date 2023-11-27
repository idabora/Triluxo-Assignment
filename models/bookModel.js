const mongoose = require('mongoose');

const bookSchema= new mongoose.Schema(
{
    title:{
        type:String,
        trim:true,
        // unique:true,
        required:[true,'Book Title is Required']
    },
    author:{
        type:String,
        trim:true,
    },
    genre:{
        type:String,
        trim:true,
        // enum:['fiction','novel','mystry','romatic','love','narrative','history','poetry','biography','non fiction']
    },
    pageCount:{
        type:Number,
        trim:true
    }
},
{
    timestamps:true
}
);

const Book= new mongoose.model('Book',bookSchema);
module.exports=Book;