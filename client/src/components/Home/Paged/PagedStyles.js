import styled from 'styled-components';

export const Container = styled.div`
	grid-column: 2/7;
	grid-row: 1/2;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 390px) {
		grid-column: 1/7;
	}
`;
export const Button = styled.button`
	visibility: ${(props) => (props.active ? 'hidden' : 'visible')};
	margin: 0 20px;
	background-color: inherit;
	color: #f1f1f1;
	padding: 5px 20px;
	border: 1px solid #f1f1f1;
	border-radius: 40px;
	cursor: pointer;
`;

export const Page = styled.span`
	visibility: ${(props) => (props.active ? 'hidden' : 'visible')};
	margin: 0 20px;
	background-color: ${(props) => props.main && '#ccc'};
  padding:5px 10px;
  border-radius: 40%;
  cursor: pointer;
`;
