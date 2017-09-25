const fs = require('fs');
const PAGE_SIZE = 10;
const _ = require('lodash');

const DATA_FILE = './data/MOCK_DATA.json';


let Controller = function (){};

	Controller.getUsersList = (done)=>{
		fs.readFile(DATA_FILE, (err,data)=>{
			if (err) {
				console.log(err);
				return done (err);
			}
			let usersList;

			try {
				usersList = JSON.parse(data);
			}
			catch(err){
				console.log('Error reading file',err);
				return done(err);
			}

			

			return done(null, usersList);
		})
	};

	Controller.index = (req,res,next)=>{

		Controller.getUsersList((err, usersList)=>{
			if (err) {
				console.log(err);
				return done (err);
			}

			
			let users = usersList.slice(0, PAGE_SIZE);
			console.log(users);
			res.render('parts/users/index', {
				users: users,
				count: usersList.length
			})
		})
		//res.send('reading file data');
	};

	Controller.form = (req,res,next)=>{
		res.render('users/add.pug');

	};

	Controller.save = (req,res)=>{
		let user = _.pick(req.body, ['first_name', 'last_name', 'email', 'gender']);

		Controller.getUsersList((err, usersList)=>{
			if (err) {
				console.log(err);
				return done (err);
			}

			usersList.push(user);

			let users = usersList.slice(0, PAGE_SIZE);
			console.log(users);
			res.render('parts/users/index', {
				users: users,
				count: usersList.length
			})
		})

		fs.writeFile(DATA_FILE, JSON.stringify(usersList, (err)=> {
			if(err){
				return next(err);
			}

		}))
	};


module.exports = Controller;












