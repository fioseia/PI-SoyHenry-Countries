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
  sports: '#0487D9',
  cultural: '#F29F05',
  gastronomy: '#D92B04',
  nature: '#038C73',
  night: '#7E60BF',
  others: '#91D7F2',
}

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
background-color: #f1f1f1;
padding: 20px;
border-radius: 20px;
`
export const Wrapper = styled.div`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
`;

export const Flag = styled.img`
width:30%;
`;

export const Name = styled.h1`
width:70%;
padding: 20px;
font-size: 2.5rem;
letter-spacing:10px;
text-align: center;
text-transform: uppercase;
color: #010101;
`;

export const Info = styled.div`
width:30%;
align-self: flex-start;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#0C3C78;
border-radius: 10px;
padding: 20px 0;
`;

export const InfoItem = styled.p`
font-size:18px;
letter-spacing:2px;
`;

export const ActivitiesContainer = styled.div`
width: 70%;
padding: 0 20px;
/* align-self: flex-start; */
display: flex;
flex-direction: column;
`;

export const ActivityCard = styled.div`
width: 100%;
background-color: ${props => bg[props.bg]};
margin-bottom: 10px;
display: flex;
align-items: center;
padding: 10px;
border-radius: 10px;
`;

export const ActivityCardIcon = styled.div`
  background-image:  url(${(props) => (icons[props.icon])});
  background-size: cover;
  background-position: center;
  width:150px;
  height:150px;

  `;

export const ActivityCardInfo = styled.div`
padding: 20px;
`;

export const ActivityCardInfoItem = styled.span`
display: block;
letter-spacing: 2px;
font-size: ${props => props.type? '20px' : '14px'};

`;
