import styled from 'styled-components';

export const Container = styled.div`
	grid-column: 1/2;
	grid-row: 1/7;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	max-height: 100vh;
	background-color: #090030;

	@media (max-width: 390px) {
		grid-column: 1/7;
		grid-row: 2/3;
		flex-direction: row;
	}
`;

export const Categories = styled.fieldset`
	display: ${(props) => (props.visibility ? 'none' : 'flex')};
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	margin: 0;
	padding: 0;
	border: none;
`;
export const Subcategories = styled.fieldset`
	display: ${(props) => (props.visibility ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	margin: 0;
	padding: 0;
	border: none;
`;
export const Legend = styled.legend`
	text-align: center;
`;
export const Label = styled.label`
	width: 90%;
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: space-evenly;
	justify-content: center;
	border-radius: 10px;
	background-color: #0c3c78;
	padding: 5px 10px;
	letter-spacing: 2px;
	cursor: pointer;
`;
export const Searchbar = styled.input`
	background-color: #0c3c78;
	border: none;
	border-radius: 59px;
	font-size: 16px;
`;
export const Radio = styled.input`
	display: none;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 10px 0;
`;

export const Switch = styled.div`
	/* position: relative;
	display: inline-block;
	width: 60px;
	height: 30px;
	margin: 0 10px; */
`;

export const Slider = styled.span`
	/* position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 34px;

	&:before {
		position: absolute;
		content: '';
		height: 25px;
		width: 25px;
		left: 3px;
		bottom: 3px;
		background-color: white;
		transition: 0.4s;
		border-radius: 50px;
	} */
`;

export const Checkbox = styled.input`
	/* display: none;
	// si checked es true el background color es #0c3c78
	&:checked + ${Slider} {
		background-color: #f9c0c0;
	} */
`;
