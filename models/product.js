const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  
    
    name:{
        type:String,
        required:true,
    },
    subheading:{
        type:String,
        required:true
    },
    subcontent:{
        type:String,
        required:true
    },
    // quantity:{
    //     type:Number,
    //     required:true,
    // } ,
    content:{
        type:String,
        required:true

    } ,
    videolink:{
        type:String
    },
    imageData: {
        data: Buffer,
        contentType: String
      },

    
},{
    versionKey:false
});
const Product =  mongoose.model('Product',productSchema);
module.exports = Product;