const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		});

		console.log(
			`MongoDB Connected: ${conn.connection.host}`.blue.bold.underline
		);
	} catch (error) {
		console.error(`error: ${error.message}`.red.bold.underline);
		process.exit(1);
	}
};

module.exports = connectDB;
