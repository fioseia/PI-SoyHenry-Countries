import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
  max-width: 100vw;
  height: 10vh;
	background-color: yellow;
  margin-bottom: 50px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div``;

export const Button = styled(NavLink)``;
