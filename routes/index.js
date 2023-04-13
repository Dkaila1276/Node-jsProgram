var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/loginpage', function(req, res, next) {
  res.render('login');
});

router.post('/myprocess',function(req,res){
  const mail = req.body.email;
  const pass = req.body.password;
  res.render('data',{myemail:mail,mypass:pass});

});
router.get('/add', function(req, res, next) {
  res.render('form');
});

router.post('/myprocess1',function(req,res){
  const name = req.body.txt1;
  const ag = req.body.num1;
  const bg = req.body.bg1;
  if (parseInt(ag) > 18 && parseInt(ag) < 55 )
  {
    msg = `${name} is Eligiable for blood donating.`;
  }
  else 
  {
    msg = `${name} is not Eligiable for blood donating.`;
  }
  res.render('data1',{myfname:name,myage:ag,mybg:bg,mymsg:msg});

});



router.get('/view', function(req, res, next) {
  res.render('table');
});

module.exports = router;
