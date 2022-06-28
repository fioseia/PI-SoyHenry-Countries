import styled from 'styled-components';

export const Container = styled.div`
	grid-column: 1/2;
	grid-row: 1/7;

	@media (max-width: 390px) {
		grid-column: 1/7;
		grid-row: 2/3;
	}
`;

export const Categories = styled.fieldset`
	visibility: ${(props) => (props.visibility ? 'hidden' : 'visible')};
`;
export const Subcategories = styled.fieldset`
	visibility: ${(props) => (props.visibility ? 'visible' : 'hidden')};
`;
export const Legend = styled.legend``;
export const Label = styled.label``;
export const Searchbar = styled.input``;
export const Radio = styled.input``;
