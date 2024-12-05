const express = require("express");
const router = express.Router();
const {
	getPatients,
	createPatient,
	updatePatient,
	deletePatient,
} = require("../controllers/patient");

router.get("/", getPatients);
router.post("/", createPatient);
router.patch("/", updatePatient);
router.delete("/", deletePatient);

module.exports = router;
