import styled from 'styled-components'

export const Container = styled.div`

width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Form = styled.form`
width: 50%; 
min-height: 70%;
background-color: pink;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding:  20px;
`

export const Label = styled.label`
width: 100%;
display: flex;
flex-direction: column;
font-weight: 600;
`

export const Input = styled.input`
margin: 5px 0;
outline: none;
border:1px solid #ccc;
border-radius: 5px;
padding: 5px;
`

export const Select = styled.select`
margin: 5px 0;
outline: none;
border:1px solid #ccc;
border-radius: 5px;
padding: 5px;
`

export const Option = styled.option``

export const Error = styled.span`
color: red;
`

export const Wrapper = styled.div`
width: 100px;
background: cyan;
padding: 5px 10px;
margin: 5px;
display: flex;
justify-content: space-around;
align-items: baseline;
border-radius: 15px;
font-weight: 600;

`

export const Country = styled.span``

export const DeleteButton = styled.button`
background: transparent;
border: none;
color: #f1f1f1;
font-weight: 600;
cursor: pointer;
`

export const Submit = styled.input`
margin: 20px 0;
width: 100%;
`