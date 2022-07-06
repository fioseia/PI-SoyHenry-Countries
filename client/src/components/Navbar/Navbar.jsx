// import React from 'react';
// import { Button, Container, Title } from './NavbarStyles';

// const Navbar = ({ button }) => {
// 	return (
// 		<Container>
// 			<Title>Countries</Title>
// 			{button === 'home' ? (
// 				<Button to='/countries'>Home</Button>
// 			) : (
// 				<Button to='/activities'>Create</Button>
// 			)}
// 		</Container>
// 	);
// };

// export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Title } from './NavbarStyles';

export class Navbar extends Component {

	render() {
		return (
			<Container>
				<Link to='/' style={{textDecoration: 'none'}}>
					<Title>TravelPal.</Title>
				</Link>
				{this.props.button === 'home' ? (
					<Button to='/countries'>Home</Button>
				) : (
					<Button to='/activities'>Create new activity</Button>
				)}
			</Container>
		);
	}
}

export default Navbar;
