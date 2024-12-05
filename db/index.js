const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("medicine", "brnmarq", "Br14nM4rq", {
// 	dialect: "postgres",
// 	host: "localhost",
// 	port: 5432,
// });

// const sequelize = new Sequelize(
// 	"postgresdb_oc7j",
// 	"brnmarq",
// 	"eIW0MclSiDmmK28yEN7F8ucccBiP3u7R",
// 	{
// 		dialect: "postgres",
// 		host: "dpg-ct9081u8ii6s73folo3g-a.oregon-postgres.render.com",
// 		port: 5432,
// 		ssl: {
// 			require: true,
// 		},
// 	}
// );

const sequelize = new Sequelize(
	"postgresql://brnmarq:eIW0MclSiDmmK28yEN7F8ucccBiP3u7R@dpg-ct9081u8ii6s73folo3g-a.oregon-postgres.render.com/postgresdb_oc7j?ssl=true"
);

module.exports = sequelize;
