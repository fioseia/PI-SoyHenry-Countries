let capitalizeFirstLetter = (str) => {
	let aux = str
		.split(' ')
		.map((el) => el.charAt(0).toUpperCase() + el.slice(1));
	return aux.join(' ');
};

let formatingILikeQuery = (obj,op) => {
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [
			key.toLowerCase(),
			{ [op]: `%${value}%`},
		])
	);
};
module.exports = {
	capitalizeFirstLetter,
	formatingILikeQuery,
};
