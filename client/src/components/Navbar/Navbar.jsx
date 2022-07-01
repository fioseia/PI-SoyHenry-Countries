import React from 'react';
import { Button, Container, Title } from './NavbarStyles';

const Navbar = ({ button }) => {
	return (
		<Container>
			<Title>Countries</Title>
			{button === 'home' ? (
				<Button to='/countries'>Home</Button>
			) : (
				<Button to='/activities'>Create</Button>
			)}
		</Container>
	);
};

export default Navbar;
