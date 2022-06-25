import styled from 'styled-components';

export const Container = styled.div`
	grid-area: container;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
`;
