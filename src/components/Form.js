import React, { useState, useEffect } from 'react';
import axios from 'axios'

import {
    MyFormButton,
    MyFormInput,
    MyFormContainer,
    MyFormHeader,
    MyFormText,
    MyFormField,
    MyFormMessage,
    MyFormTableMessage,
    MyFormMessageIndex,
    MyFormMessageField,
    MyFormDeleteButton
} from '../layout/Form';
import { config } from '../config';

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState("Write your message here")
    const [messages, setMessages] = useState([])
    const [allIndex, setIndex] = useState([])
    const [count, setCount] = useState(0)

    function Example() {
        
    }

    let arrayIndex = []

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }

    const onSubmit = () => {
        console.log({
            name,
            lastName,
            email,
            message
        })
    }

    const sendDataToServer = async () => {
        return await axios.post(config.api + 'register', {
            name,
            lastName,
            email,
            message
        })
    }

    const deleteDataFromServer = (_id) => async () => {
        return await axios.delete(config.api + 'deleteMessage', {
             data: {_id }
        }).then(res => {
            setMessages(messages.filter((el) => (el._id !== _id)))
        })
    }

    const getAllMessages = async () => {
        const {data} = await axios.get(config.api + 'allMessages')

        return setMessages(data)
    }

    const increaseIndex = () => {      
        // useEffect(() => {
        //     console.log(count)
        // })
        setCount(count + 1)
        console.log(count)
    }


    return (
        <MyFormContainer>
            <MyFormHeader>
                Contact form
        </MyFormHeader>
            <MyFormField>
                <MyFormText>
                    Your name
                </MyFormText>
                <MyFormInput
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    isName
                />

                <MyFormInput
                    type="text"
                    placeholder="Last Name"
                    name="LastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    isName
                />
            </MyFormField>
            <MyFormField>
                <MyFormText>
                    Your email
            </MyFormText>
                <MyFormInput
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isEmail
                    required
                />
            </MyFormField>
            <MyFormField>
                <MyFormText>
                    Your message
            </MyFormText>
                <MyFormInput
                    type="text"
                    laceholder="message"
                    name="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    isTextMessage
                    isEmail
                />
            </MyFormField>
            <MyFormButton onClick={sendDataToServer}>submit</MyFormButton>
            <MyFormButton onClick={getAllMessages}>Get all messages</MyFormButton>

            {messages && messages.map((el, index) => {
                // arrayIndex.push(0)
                return (
                    <MyFormTableMessage key={el._id}>
                        <MyFormMessageIndex onClick={increaseIndex}>{index + count + 1}</MyFormMessageIndex>
                        <MyFormMessageField>name: {el.name}</MyFormMessageField>
                        <MyFormMessageField>last name: {el.lastName}</MyFormMessageField>
                        <MyFormMessageField>email: {el.email}</MyFormMessageField>
                        <MyFormMessageField>message: {el.message}</MyFormMessageField>
                        <MyFormMessageField>id: {el._id}</MyFormMessageField>
                        <MyFormDeleteButton onClick={deleteDataFromServer(el._id)}>X</MyFormDeleteButton>
                    </MyFormTableMessage>
                )
            })}
        </MyFormContainer>
    )
}

export default Form;
