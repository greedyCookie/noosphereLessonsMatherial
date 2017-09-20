module.exports = {
	index: function(req, res, next) {
		req.query;
	  	res.render('index', { 
	  	  title: 'Express', 
	  	  helloMessage: "hi",
	  	  query: JSON.stringify(req.query)
	    })
	},
    post: (req,res,next)=>{
		console.log(req.body);
		res.status = (201).send();
	}
}