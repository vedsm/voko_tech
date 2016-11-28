/**
 * Created by ved on 28/11/16.
 */
var User       = require('./../models/user');

module.exports = function (app) {
    app.post('/addUser',function (req, res) {
        var name = req.body.name || req.query.name;
        console.log("adding user with name->",name);
        if(!name)
            return res.status(403).send({success: false, message: 'no name provided'});

        User.findOne({'name': name},function(err,user){
            if(err)console.error(err);
            else if(!user){
                var newUser =new User();
                newUser.name=name;
                newUser.save(function(err, savedUser) {
                    if (err) {
                        console.error(err);
                        return res.status(500).send({success:false,message:"error",error:err})
                    }
                    else if(!savedUser) {
                        console.error("No user saved!");
                        return res.status(500).send({success:false,message:"error in saving user"});
                    }
                    else {
                        res.json({success:true,message:"user created with name->"+name,user:savedUser});
                    }
                });
            }
            else{
                res.json({success:true,message:"previous user with same name found",user:user});
            }
        });
    });
    app.get('/findUser',function (req, res) {
        var name = req.query.name;
        console.log("finding user with name->",name);
        if(!name)
            return res.status(403).send({success: false, message: 'no name provided'});

        User.findOne({'name': name},function(err,user){
            if(err){
                console.error(err);
                return res.status(500).send({success:false,message:"error",error:err})
            }
            else if(!user){
                return res.status(403).send({success:false,message:"no user found"})
            }
            else{
                res.json({success:true,message:"user found",user:user});
            }
        });
    });
};