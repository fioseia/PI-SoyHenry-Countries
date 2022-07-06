import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Container } from './CardsContainerStyles';

const CardsContainer = ({ countries }) => {
	const pagination = useSelector((state) => state.paginationReducer);

	let lastIndex = pagination.current * pagination.cardsPerPage - 1;

	let startIndex =
		pagination.current > 1
			? lastIndex - pagination.cardsPerPage
			: lastIndex + 1 - pagination.cardsPerPage;

	return (
		<Container>
			{countries.length ?
				countries
					.slice(startIndex, lastIndex)
					.map((country) => <Card key={country.id} country={country} />):<h2>Oh oh! Countries not found!</h2>}
		</Container>
	);
};

export default CardsContainer;
