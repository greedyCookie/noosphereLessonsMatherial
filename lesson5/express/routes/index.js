var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.query;
  res.render('index', { 
  	title: 'Express', 
  	helloMessage: "hi",
  	query: JSON.stringify(req.query)
  });
});


router.post('/', (req,res,next)=>{
	console.log(req.body);
	res.status = 201.send();
})
module.exports = router;
