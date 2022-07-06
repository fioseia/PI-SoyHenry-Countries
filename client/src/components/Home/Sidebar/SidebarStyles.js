import styled from 'styled-components';

export const Container = styled.div`
	width: 15%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-height: 100vh;
	padding: 0 10px;
`;

export const Filter = styled.div`
	font-size: 18px;
	font-weight: 500;
	color: #f1f1f1;
	text-align: center;
	letter-spacing: 2px;
  margin: 10px 0;
`;

export const Select = styled.select`
	width: 100%;
	height: 30px;
  border-radius: 50px;
	border: 2px solid #0099dd;
	background-color: #010101;
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;
	padding: 0 10px;
	margin: 10px 0;
	cursor: pointer;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	&:focus {
		outline: none;
	}
	&:hover {
		background-color: #fff;
		color: #090030;
	}
`;

export const Option = styled.option``;

export const Searchbar = styled.input`
	background: linear-gradient(
		90deg,
		rgba(161, 199, 224, 1) 0%,
		rgba(0, 153, 221, 1) 100%
	);
	height: 30px;
	font-size: 1.2rem;
	font-weight: bold;
	border: none;
	border-radius: 50px;
	text-align: center;
	color: #f1f1f1;
  margin-bottom: 10px;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: #f1f1f1;
	}
`;
