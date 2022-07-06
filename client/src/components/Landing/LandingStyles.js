import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
`;

export const Wrapper = styled.div`
	position: absolute;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #f1f1f1;
	padding: 10px;
	z-index: 1000;
`;

export const Title = styled.h1`
	font-weight: 800;
	text-align: center;
	font-size: 100px;
	margin-bottom: 0;
`;

export const Span = styled.span`
	color: #0099dd;
`;

export const Subtitle = styled.h2`
	font-weight: 400;
	letter-spacing: 1px;
	text-align: center;
	font-size: 30px;
`;

export const Button = styled(Link)`
	color: #f1f1f1;
  font-weight: 800;
	text-decoration: none;
	background: linear-gradient(
		90deg,
		rgba(161, 199, 224, 1) 0%,
		rgba(0, 153, 221, 1) 100%
	);
	padding: 10px 30px;
	border-radius: 50px;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const ImageContainer = styled.div`
	min-width: 400px;
	-webkit-box-reflect: below -160px linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.7));
	opacity: 0.3;
`;
export const Image = styled.img`
	width: 100%;
	position: relative;
	padding-bottom: -100px;
`;
