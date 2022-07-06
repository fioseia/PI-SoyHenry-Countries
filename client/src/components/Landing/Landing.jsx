import React from 'react';
import earthGif from '../../assets/earth.gif';
import Navbar from '../Navbar/Navbar';
import {
	Button,
	Container,
	Image,
	ImageContainer,
	Span,
	Subtitle,
	Title,
	Wrapper,
} from './LandingStyles';

const Landing = () => {
	return (
		<>
			<Navbar />
			<Container>
				<Wrapper>
					<Title>
						Travel<Span>Pal.</Span>
					</Title>
					<Subtitle>
						Find activities to do in your next destination or recommend that
						thing that blew your mind
					</Subtitle>
					<Button to='/countries'>Home</Button>
				</Wrapper>
				<ImageContainer>
					<Image src={earthGif} alt='' />
				</ImageContainer>
			</Container>
		</>
	);
};

export default Landing;
