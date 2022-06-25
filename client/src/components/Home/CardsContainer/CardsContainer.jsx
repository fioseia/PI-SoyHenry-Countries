import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import { Container } from './CardsContainerStyles';

const CardsContainer = ({ countries }) => {
	const pagination = useSelector((state) => state.paginationReducer);

	let lastIndex =
		pagination.current === 1
			? pagination.current * pagination.cardsPerPage - 1
			: pagination.current * pagination.cardsPerPage;

	let startIndex =
		pagination.current > 1
			? lastIndex - 1 - pagination.cardsPerPage
			: lastIndex + 1 - pagination.cardsPerPage;

	return (
		<Container>
			{countries &&
				countries
					.slice(startIndex, lastIndex)
					.map((country) => <Card key={country.id} country={country} />)}
		</Container>
	);
};

export default CardsContainer;
