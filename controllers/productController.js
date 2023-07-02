const Product = require("../models/product");



//getting all products

module.exports.getProduct= async(req,res)=>{
    try{
        const products = await Product.find({});
        
        if(!products.length){
             return res.status(400).json({ msg: "Opps.. no product found in the db..",})
             
        }
        if(products){
         res.status(200).json({
            data:products
            

        })}

    }catch(err){
        res.status(404).json({
            msg:'There was an error while finding the products..'
            
            

        })

    }
}



