import styled from 'styled-components';
import { Link } from "react-router-dom";


export const CardLink = styled(Link)`
text-decoration: none;
color: #f1f1f1;
`

export const Wrapper = styled.div`
	transform: translate3d(0rem, 2rem, 3rem);
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-shadow: 0 0.1rem 1rem #000;
`;

export const Name = styled.h2`
	font-weight: 500;
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	font-size: 1.5rem;
  //background-color: yellow;
  margin-bottom: 0;
`;
export const Continent = styled.p`
	font-weight: 500;
	letter-spacing: 0.2rem;
	text-transform: uppercase;
	font-size: 1rem;
  `;

export const Container = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.image})`,
	},
}))`
	position: relative;
	height: 200px;
	perspective: 1000;
	background-position: center;
	background-size: cover;
	transform-style: preserve-3d;
	display: flex;
	align-items: flex-end;
	perspective: 1000;
  opacity: .8;

	cursor: pointer;

  &:hover{
    opacity: 1;
  }
`;
