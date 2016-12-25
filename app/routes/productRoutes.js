
/**
 * Created by chirag on 11/12/16.
 */

var Product =  require ('./../models/products');

module.exports = function (app) {
    app.post('/api/addProduct',function (req, res) {

        var productID = req.body.productID || req.query.productID;
        console.log("adding product with id->",productID);
        if(!productID)
            return res.status(403).send({success: false, message: 'no productID provided'});

        var productName = req.body.productName || req.query.productName;
        console.log("adding product with name->",productName);
        if(!productName)
            return res.status(403).send({success: false, message: 'no productName provided'});

        var rentPerMonth = req.body.rentPerMonth || req.query.rentPerMonth;
        console.log("adding product with rent->",rentPerMonth);
        if(!rentPerMonth)
            return res.status(403).send({success: false, message: 'no rentPerMonth provided'});        

        var imageURL = req.body.imageURL || req.query.imageURL;
        console.log("adding product with url->",imageURL);
        if(!imageURL)
            return res.status(403).send({success: false, message: 'no imageURL provided'});


        Product.findOne({'productID': productID,'productName': productName,'rentPerMonth': rentPerMonth,'imageURL': imageURL},function(err,product){

            if(err)console.error(err);
            else if(!product){
                var newProduct =new Product();
                newProduct.productID=productID;
                newProduct.productName=productName;
                newProduct.rentPerMonth=rentPerMonth;
                newProduct.imageURL=imageURL;
                newProduct.save(function(err,savedProduct) {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({success:false,message:"error",error:err});
                    }
                    else if(!savedProduct) {
                        console.error("No product saved!");
                        return res.status(500).send({success:false,message:"error in saving product"});
                    }
                    else {
                        res.json({success:true,message:"product entered with id->"+productID,product:savedProduct});
                        res.json({success:true,message:"product entered with name->"+productName,product:savedProduct});
                        res.json({success:true,message:"product entered with rent->"+rentPerMonth,product:savedProduct});
                        res.json({success:true,message:"product entered with imageURL->"+imageURL,product:savedProduct});
                    }
                });
            }
            else{
                res.json({success:true,message:"previous product with same id found",product:product});
            }
        });
            

    });

    app.get('/api/findProduct',function (req, res) {
        var productID = req.query.productID;
        console.log("finding product with id->",productID);
        if(!productID)
            return res.status(403).send({success: false, message: 'no id provided'});

        Product.findOne({'productID': productID},function(err,product){
            if(err){
                console.error(err);
                return res.status(500).send({success:false,message:"error",error:err})
            }
            else if(!product){
                return res.status(403).send({success:false,message:"no product found"})
            }
            else{
                res.json({success:true,message:"product found",product:product});
            }
        });
    });



    app.get('/api/allProducts',function(req,res){
        Product.find(function(err,allProducts){
            if(err){
                console.error("error in fetching all products",allProducts);
                return res.status(500).send({success:false,message:"error in fetching all productrs",error:err});
            }
            else{
                return res.json({success:true,allProducts:allProducts});
            }
        })
    })
};