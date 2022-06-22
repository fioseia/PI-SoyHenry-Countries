const { DataTypes } = require('sequelize');
const { capitalizeFirstLetter } = require('../helpers/helpers');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('Activity', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			unique: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: /^[a-zA-Z0-9 ]*$/gm,
			},
			set(value) {
				this.setDataValue('name', capitalizeFirstLetter(value));
			},
		},
		difficulty: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				min: 1,
				max: 5,
				isNumeric: {
					msg: 'DIFFICULTY must be a number between 1 and 5',
				},
			},
		},
		duration: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				is: {
					args: [/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/gm],
					msg: 'Duration must be a value between 00:00 and 23:59',
				},
			},
		},
		season: {
			type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
			validate: {
				isIn: {
					args: [['Summer', 'Autumn', 'Winter', 'Spring']],
					msg: 'The SEASON must be Summer, Autumn, Winter or Spring',
				},
			},
		},
	});
};
