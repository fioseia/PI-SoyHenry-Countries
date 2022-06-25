import styled from 'styled-components';

export const Container = styled.div`
	min-height: 80vh;
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-template-areas:
		'sidebar pagination pagination pagination pagination'
		'sidebar container container container container'
		'sidebar container container container container'
		'sidebar container container container container'
		'sidebar container container container container'
		'sidebar container container container container';
	@media (max-width: 390px) {
		grid-template-areas:
			'sidebar sidebar sidebar sidebar sidebar'
			'sidebar sidebar sidebar sidebar sidebar'
			'pagination pagination pagination pagination pagination'
			'container container container container container'
			'container container container container container'
			'container container container container container';
	}
`;
