import styled from 'styled-components';

export const Container = styled.div`
	grid-column: 2 / 7;
	grid-row: 2 / 7;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 300px));
	grid-gap: 50px;
	padding: 30px;

	@media (max-width: 390px) {
		grid-column: 1 / 7;
		grid-row: 3 / 7;
	}
`;
