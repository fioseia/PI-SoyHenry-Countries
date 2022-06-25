import styled from 'styled-components';

export const Container = styled.div`
	grid-area: pagination;
	background-color: red;
`;
export const Button = styled.button`
	visibility: ${(props) => (props.active ? 'hidden' : 'visible')};
`;

export const Page = styled.span`
	visibility: ${(props) => (props.active ? 'hidden' : 'visible')};
`;
