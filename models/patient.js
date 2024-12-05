const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

const Patient = sequelize.define(
	"Patient",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		fullName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dateOfBirth: {
			type: DataTypes.DATE,
		},
		age: {
			type: DataTypes.INTEGER,
		},
		gender: {
			type: DataTypes.CHAR,
		},
		identificationNumber: {
			type: DataTypes.STRING,
		},
		schooling: {
			type: DataTypes.STRING,
		},
		grade: {
			type: DataTypes.STRING,
		},
		riskFactor: {
			type: DataTypes.STRING,
		},
		family: {
			type: DataTypes.STRING,
		},
		location: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: "patient",
	}
);

module.exports = Patient;
