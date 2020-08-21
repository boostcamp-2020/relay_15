var express = require('express');
var router = express.Router();
var users = require('../public/database/users.json');


const getUserByEmail = (email) =>{
    for (const user of users){
        if (user.email === email) return user;
    }
}

router.get('/', async function(req, res, next) {
  const dataBuffer = fs.readFileSync('./public/database/users.json');
  const dataJson = dataBuffer.toString();
  const list = JSON.parse(dataJson);
  let user = ;

  res.json((await dbHelper.getAllPost(req.body.email))[0]);
})
  

req.body.email