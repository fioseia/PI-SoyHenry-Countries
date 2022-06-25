import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const Wrapper = styled.div`
	flex: 1;
	min-width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	color: #f1f1f1;
	padding: 10px;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	font-weight: 400;
	letter-spacing: 5px;
	text-align: center;
	font-size: 40px;
`;

export const Subtitle = styled.h2`
	font-weight: 300;
	letter-spacing: 3px;
	text-align: center;
	font-size: 25px;
`;

export const Button = styled(Link)`
	color: #f1f1f1;
	text-decoration: none;
	background-color: #37538c;
	padding: 10px 30px;
	border-radius: 50px;
`;

export const ImageContainer = styled.div`
	flex: 1;
	min-width: 400px;
	-webkit-box-reflect: below -160px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.7));
`;
export const Image = styled.img`
	width: 100%;
	position: relative;
	padding-bottom: -100px;
`;
