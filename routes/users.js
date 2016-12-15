var express = require('express');
var router = express.Router();
var user_function = require('../db/user_db');

/* GET users listing. */
router.get('/:id', (req, res)=> {
  if(!isNaN(req.params.id)){
    user_function.getOne(req.params.id).then((user)=>{
      if(user){
        delete user.password;
        res.json(user)
      }else{
        resError(res, 404, "User Not Found");
      }
    })
  }else{
    resError(res,500,"Invalid ID")
  }
});

function resError(res, statusCode, message){
  res.status(statusCode);
  res.json({message});
}

module.exports = router;
