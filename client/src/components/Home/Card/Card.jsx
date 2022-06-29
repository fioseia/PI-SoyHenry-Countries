import React from 'react';
import { Container, Continent, CardLink, Name, Wrapper } from './CardStyles';
import useTilt from './useTilt';

const Card = ({ country }) => {
	let ref = useTilt();

	return (
		<CardLink to={`/countries/${country.id}`}>
			<Container id={country.id} image={country.image} ref={ref}>
				<Wrapper>
					<Name>{country.name}</Name>
					<Continent> - {country.continent}</Continent>
				</Wrapper>
			</Container>
		</CardLink>
	);
};

export default Card;
