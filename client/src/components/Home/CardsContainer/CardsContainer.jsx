import React from 'react';
import Card from '../Card/Card';
import { Container } from './CardsContainerStyles';

const CardsContainer = ({ countries }) => {
	return (
		<Container>
			{countries &&
				countries.map((country) => <Card key={country.id} country={country} />)}
		</Container>
	);
};

export default CardsContainer;
