/**
 * Created by ved on 28/11/16.
 */
var User       = require('./../models/user');

module.exports = function (app) {
    app.post('/api/addUser',function (req, res) {
        var firstname = req.body.firstname || req.query.firstname;
        console.log("adding user with firstname->",firstname);
        if(!firstname)
            return res.status(403).send({success: false, message: 'no firstname provided'});

        var lastname = req.body.lastname || req.query.lastname;
        console.log("adding user with lastname->",lastname);
        if(!lastname)
            return res.status(403).send({success: false, message: 'no lastname provided'});

        var email = req.body.email || req.query.email;
        console.log("adding user with email->",email);
        if(!email)
            return res.status(403).send({success: false, message: 'no email provided'});


        User.findOne({'firstname': firstname,'lastname': lastname,'email':email },function(err,user){
            if(err)console.error(err);
            else if(!user){
                var newUser =new User();
                newUser.firstname=firstname;
                newUser.lastname=lastname;
                newUser.email=email;
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
                        res.json({success:true,message:"user created with firstname->"+firstname,user:savedUser});
                        res.json({success:true,message:"user created with lastname->"+lastname,user:savedUser});
                        res.json({success:true,message:"user created with email->"+email,user:savedUser});
                    }
                });
            }
            else{
                res.json({success:true,message:"previous user with same firstname found",user:user});
            }
        });
    });

    app.get('/api/findUser',function (req, res) {
        var firstname = req.query.firstname;
        console.log("finding user with firstname->",firstname);
        if(!firstname)
            return res.status(403).send({success: false, message: 'no firstname provided'});

        User.findOne({'firstname': firstname},function(err,user){
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



    app.get('/api/allUsers',function(req,res){
        User.find(function(err,allUsers){
            if(err){
                console.error("error in fetching all users",allUsers);
                return res.status(500).send({success:false,message:"error in fetching all users",error:err});
            }
            else{
                return res.json({success:true,allUsers:allUsers});
            }
        })
    })
};