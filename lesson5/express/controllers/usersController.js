const fs = require('fs');
const PAGE_SIZE = 10;
module.exports = {
	index: (req,res,next)=>{
		fs.readFile('./data/MOCK_DATA.json', (err,data)=>{
			if (err) {
				console.log(err);
				return next (err);
			}
				let usersList;

				try {
					usersList = JSON.parse(data);
				}
				catch(err){
					console.log('Error reading file',err);
					return next (err);
				}

				let users = usersList.slice(0, PAGE_SIZE);
				console.log(users);
				res.render('parts/users/index', {
					users: users,
					count: usersList.length
					})
		})
		//res.send('reading file data');
	}
}