const http = require('http');
const fs = require('fs');


const server = http.createServer();

server.on('request', (req,res)=> {
	const {method, url, headers} = req;

	console.log(`REQUEST = ${method}, ${url}`);

	res.setHeader("Content-Type", "image/jpeg");

	// let test = {
	// 	a: 1234,
	// 	b: "asdsadads"
	// }

	let filePath = "./assets/img.jpeg";

	let readStream = fs.createReadStream(filePath);

	readStream.pipe(res);

	// res.write(JSON.stringify(test));

	//res.end();
});



server.listen(3000);