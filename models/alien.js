const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	planet: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("Alien", alienSchema);
