const Patient = require("../models/patient");

const getPatients = async (_, res) => {
	try {
		const patients = await Patient.findAll();
		return res.status(200).json(patients);
	} catch (error) {
		console.error("Unable to fetch patients:", error);
	}
};

const createPatient = async (req, res) => {
	try {
		const {
			fullName,
			dateOfBirth,
			age,
			gender,
			identificationNumber,
			schooling,
			grade,
			riskFactor,
			family,
			location,
		} = req.body;

		if (!fullName)
			return res.status(400).send({ error: "fullName is required" });

		const newPatient = await Patient.create({
			fullName,
			dateOfBirth,
			age,
			gender,
			identificationNumber,
			schooling,
			grade,
			riskFactor,
			family,
			location,
		});

		return res.status(200).json(newPatient);
	} catch (error) {
		console.log(error);
		return res.status(500).send({ error: error.message });
	}
};

const updatePatient = async (req, res) => {
	try {
		const {
			id,
			fullName,
			dateOfBirth,
			age,
			gender,
			identificationNumber,
			schooling,
			grade,
			riskFactor,
			family,
			location,
		} = req.body;

		if (!id) return res.status(400).send({ error: "id is required" });

		const updatedPatient = await Patient.update(
			{
				...(fullName && { fullName }),
				...(dateOfBirth && { dateOfBirth }),
				...(age && { age }),
				...(gender && { gender }),
				...(identificationNumber && { identificationNumber }),
				...(schooling && { schooling }),
				...(grade && { grade }),
				...(riskFactor && { riskFactor }),
				...(family && { family }),
				...(location && { location }),
			},
			{
				where: {
					id,
				},
			}
		);

		return res.status(200).json(updatedPatient);
	} catch (error) {
		console.log(error);
		return res.status(500).send({ error: error.message });
	}
};

const deletePatient = async (req, res) => {
	try {
		const { id } = req.body;

		if (!id) return res.status(400).send({ error: "id is required" });

		const deletedPatient = await Patient.destroy({
			where: {
				id,
			},
		});

		return res.status(200).json({ deletedPatient });
	} catch (error) {
		console.log(error);
		return res.status(500).send({ error: error.message });
	}
};

module.exports = { getPatients, createPatient, updatePatient, deletePatient };
