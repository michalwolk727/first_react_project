import styled from 'styled-components'

export const MyFormText = styled.text`
    color: white;
    padding-right: 30px;
    padding-left: 30px;
    /* float: left; */
    width: 15%;
    /* border-color: yellow;
    border-style: ridge; */
    text-align: center;
    margin: auto 0;

`
export const MyFormHeader = styled.h3`
    color: rgb(243, 245, 246);
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 40px;
    text-align: left;
    
`

export const MyFormContainer = styled.div`
    height: 50%;
    width: 60%;
    margin: 0 auto;
    text-align: center;
`

export const MyFormInput = styled.input`
    
    padding-right: ${props => props.isName || props.islastName ? '1px' : '4px'};
    padding-left: ${props => props.isName || props.islastName ? '1px' : '4px'};
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: center;
    /* width: ${props => props.isEmail ? '60%' : '25%'}; */
    width: ${props => props.isName || props.islastName ? '30%' : '60%'};
    height: ${props => props.isTextMessage ? '50px' : '15px'};
    outline: none;
    margin: auto 0;
`
export const MyFormMessage = styled.input`
    padding: 70px;
`

export const MyFormButton = styled.button`
    padding: 7px;
    border-radius: 5px;
    background-color: transparent;
`

export const MyFormField = styled.div`
    margin: 5%;
    padding: 5px;
    text-align: center;
    display: flex;
    /* border-color: red;
    border-style: ridge; */
`

export const MyFormTableMessage = styled.p`
    /* font-family: 'Staatliches', !important; */
    float: center;
    display: flex;
    margin: 12px auto 12px;
    padding-left: 10%;
    /* border-color: red;
    border-style: groove; */
`

export const MyFormMessageField = styled.p`
    text-align: left;
    margin-left: 10px;
    background-color: rgb(151, 219, 240);
    border-radius: 5px;
`

export const MyFormMessageIndex = styled.button`
    border-color: rgb(72, 182, 217);
    border-inline: solid;
    border-inline-color: rgb(72, 182, 217);
    border-inline-style: groove;
    border-inline-width: 2px;
    border-radius: 5px;
    float: left;
    padding: 10px;
    margin: auto 0;
    vertical-align: auto;
    background-color: #87ceeb;
    margin-left: 5%;
    cursor: pointer;

`

export const MyFormDeleteButton = styled.button`
    border-style: none;
    background-color: transparent;
    margin: 8px;
    font-size: 20px;
    cursor: pointer;
`

