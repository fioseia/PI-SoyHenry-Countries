import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cultural from '../../assets/cultural.svg';
import gastronomy from '../../assets/gastronomy.svg';
import nature from '../../assets/nature.svg';
import night from '../../assets/night.svg';
import others from '../../assets/others.svg';
import sports from '../../assets/sports.svg';

const icons = {
	sports,
	cultural,
	gastronomy,
	nature,
	night,
	others,
};

const bg = {
	sports:
		'linear-gradient(90deg, rgba(4,135,217,1) 0%, rgba(0,153,221,1) 100%);',
	cultural:
		'linear-gradient(90deg, rgba(242,159,5,1) 0%, rgba(161,83,0,1) 100%);',
	gastronomy:
		'linear-gradient(90deg, rgba(217,43,4,1) 0%, rgba(153,18,105,1) 100%);',
	nature:
		'linear-gradient(90deg, rgba(3,140,115,1) 0%, rgba(18,103,153,1) 100%);',
	night:
		'linear-gradient(90deg, rgba(126,96,191,1) 0%, rgba(18,103,153,1) 100%);',
	others:
		'linear-gradient(90deg, rgba(145,215,242,1) 0%, rgba(19,53,159,1) 100%);',
};

export const Maincontainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const Container = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 20px;
	border-radius: 20px;
`;
export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;
`;

export const Flag = styled.img`
	width: 30%;
`;

export const Name = styled.h1`
	width: 70%;
	padding: 20px;
	font-size: 2.5rem;
	letter-spacing: 10px;
	text-align: center;
	text-transform: uppercase;
`;

export const Info = styled.div`
	width: 30%;
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-radius: 10px;
	padding: 20px 0;
`;

export const InfoItem = styled.p`
	font-size: 18px;
	letter-spacing: 1px;
	font-weight: 500;
`;

export const ActivitiesContainer = styled.div`
	width: 65%;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
`;

export const ActivityCard = styled.div`
	width: 100%;
	background: ${(props) => bg[props.bg]};
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
`;

export const ActivityCardIcon = styled.div`
	background-image: url(${(props) => icons[props.icon]});
	background-size: cover;
	background-position: center;
	width: 120px;
	height: 120px;
`;

export const ActivityCardInfo = styled.div`
	padding: 20px;
`;

export const ActivityCardInfoItem = styled.span`
	display: block;
	letter-spacing: 2px;
	font-size: ${(props) => (props.type ? '20px' : '14px')};
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
	padding: 8px 30px;
	border-radius: 50px;
	transition: all 0.1s ease-in-out;
  margin-right: 30px;
  text-transform: uppercase;
  text-align: center;

	&:hover {
		transform: scale(1.05, 1.05);
	}
`
