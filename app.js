const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
// const sequelize = require("./db");
const patientRoutes = require("./routes/patient");
const bodyParser = require("body-parser");
// const Patient = require("./models/patient");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
	try {
		// const patients = await Patient.sync({ force: true });
		// console.log("The table for the User model was just (re)created!");
		// console.log("All patients:", JSON.stringify(patients, null, 2));
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
	// try {
	// 	const result = await db.query("SELECT * FROM users");
	// 	res.json(result.rows);
	// } catch (err) {
	// 	console.error(err);
	// 	res.status(500).send("Internal Server Error");
	// }
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.use("/api/patient", patientRoutes);
