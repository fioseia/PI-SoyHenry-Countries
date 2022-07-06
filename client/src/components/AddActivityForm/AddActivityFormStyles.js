import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		90deg,
		rgba(161, 199, 224, 1) 0%,
		rgba(0, 153, 221, 1) 100%
	);
`;

export const Form = styled.form`
	width: 50%;
	min-height: 70%;
	border: 3px solid #5fc7ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	border-radius: 30px;
	background-color: #010101;
  margin:30px 0;
`;

export const Label = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
	font-weight: 600;
`;

export const Input = styled.input`
	margin: 5px 0;
	outline: none;
	border: 2px solid #f1f1f1;
	border-radius: 5px;
	padding: 5px;
	color: #f1f1f1;
	background: transparent;

	&:focus {
		border: 2px solid #43a8ff;
	}
	&::placeholder {
		color: #ccc;
	}
`;

export const Select = styled.select`
	margin: 5px 0;
	outline: none;
	border: 2px solid #f1f1f1;
	border-radius: 5px;
	padding: 5px;
	color: #f1f1f1;
	background: transparent;
	&:focus {
		border: 2px solid #43a8ff;
	}
`;

export const Option = styled.option`
	color: #010101;
`;

export const Error = styled.span`
	color: red;
`;

export const Wrapper = styled.div`
	width: 100px;
	padding: 5px 10px;
	margin: 5px;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	border-radius: 15px;
	font-weight: 600;
	border: 2px solid #5fc7ff;
`;

export const Country = styled.span``;

export const DeleteButton = styled.button`
	background: transparent;
	border: none;
	color: #f1f1f1;
	font-weight: 600;
	cursor: pointer;
`;

export const Submit = styled.input`
	margin: 20px 0;
	width: 100%;
	background-image: linear-gradient(90deg, #5fc7ff 50%, #43a8ff 100%);
	color: #fff;
	border-radius: 8px;
	border: none;
	padding: 12px 30px;
	font-size: 18px;
	background-size: 200% 100%;
	background-position: 100% 100%;
	transition: background-position 256ms;
	will-change: background-position;
	text-transform: uppercase;
	letter-spacing: 2px;
  font-weight: 600;
	cursor: pointer;
	&:hover {
		background-position: 00% 200%;
	}
`;
