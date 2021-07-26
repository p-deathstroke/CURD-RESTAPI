const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/aliens";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
	console.log("connected...");
});
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
const alienRouter = require("./routers/aliens");
app.use("/aliens", alienRouter);
app.listen(9000, () => {
	console.log("Server Started...");
});
