var data = require("../data.json");

exports.addFriend = function(req, res) {   
	var name = req.query.name;
	var des = req.query.description;
	var friend = {"name": name, "description": des, "imageURL": "http://lorempixel.com/400/400/people" };
	data["friends"].push(friend);
	res.render('add', data);
}