import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 10vh;
	background-color: transparent;
	margin-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
  padding-top: 20px;
`;

export const Title = styled.h1`
margin-left: 30px;
color: #f1f1f1;
text-decoration: none;
`;

export const Button = styled(NavLink)`
	color: #f1f1f1;
	font-weight: 800;
	text-decoration: none;
	background: linear-gradient(
		90deg,
		rgba(161, 199, 224, 1) 0%,
		rgba(0, 153, 221, 1) 100%
	);
	padding: 8px 30px;
	border-radius: 50px;
	transition: all 0.1s ease-in-out;
  margin-right: 30px;
  text-transform: uppercase;

	&:hover {
		transform: scale(1.05, 1.05);
	}
`;
