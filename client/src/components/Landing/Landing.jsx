import React from 'react';
import earthGif from '../../assets/earth.gif';
import {
	Button,
	Container,
	Image,
	ImageContainer,
	Subtitle,
	Title,
	Wrapper,
} from './LandingStyles';

const Landing = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Welcome to Countries Activities</Title>
				<Subtitle>By Fiorenza Seia</Subtitle>
				<Button to='/home'>Home</Button>
			</Wrapper>
			<ImageContainer>
				<Image src={earthGif} alt='' />
			</ImageContainer>
		</Container>
	);
};

export default Landing;
