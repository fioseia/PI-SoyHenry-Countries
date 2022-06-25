import React from 'react';
import { Container, Continent, Name, Wrapper } from './CardStyles';
import useTilt from './useTilt';

const Card = ({ country }) => {
  let ref = useTilt()
  
	return (
    <Container
    id={country.id}
    image={country.image}
    ref={ref}
		> 
			<Wrapper>
				<Name>{country.name}</Name>
				<Continent> - {country.continent}</Continent>
			</Wrapper>
		</Container>
	);
};

export default Card;
