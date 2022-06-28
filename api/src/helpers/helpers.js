let capitalizeFirstLetter = (str) => {
	let aux = str
		.split(' ')
		.map((el) => el.charAt(0).toUpperCase() + el.slice(1));
	return aux.join(' ');
};



module.exports = {
	capitalizeFirstLetter,
};
