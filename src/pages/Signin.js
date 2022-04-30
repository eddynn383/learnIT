import React, { useState, useRef } from "react";
import useAuth from '../hooks/useAuth';
import Form from '../blocks/Form';
import Label from '../components/Label';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Card, Alert } from 'react-bootstrap';


const Signin = (o) => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const { signin, getDB, setDB, setCurrentUser } = useAuth()

    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const props = {
        email: {
            class: ['email'],
            id: 'email',
            label: <Label for="email">Email</Label>,
            placeholder: 'Enter your email',
            outerRef: emailRef,
            required: true
        },
        password: {
            class: ['password'],
            id: 'password',
            label: <Label for="password">Password</Label>,
            placeholder: 'Enter your password',
            outerRef: passwordRef,
            required: true
        },
        checkbox: {
            class: ['checkbox'],
            id: 'show-password',
            label: 'Show Password',
            type: 'checkbox',
            checkmark: <Icon class={['faCheck']} value='faCheck'/>
        },
        button: {
            class: ['submit', 'reset'],
            type: 'submit',
            size: 'medium',
            text: 'Submit',
            theme: 'primary',
            disabled: loading
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)

            const res = await signin(emailRef.current.value, passwordRef.current.value)
            const user = res.user
            const db = await getDB('users', user.uid)

            if (db.exists()) {
                setCurrentUser({
                    ...user,
                    roles: db.data().roles
                })
                switch (db.data().roles[0]) {
                    case 100: navigate('/learner', { replace: true })
                        break;
                    case 200: navigate('/tutor', { replace: true })
                        break;
                    case 900: navigate('/admin', { replace: true })
                        break;
                    default: navigate(from, { replace: true })
                        break;
                }
            }

            await setDB('roles', db.data().roles[0].toString(), {
                active: true
            })
       
        } catch (error) {
            setMessage('Failed to sign in')
            console.log(error)
        }
    }

    const handleCheckbox = (e) => {
        console.log(e)
        e.target.checked ? setType('text') : setType('password')
    }

    return (
        <>
        <div className="w-100" style={{maxWidth: "400px"}}>
            <h2 className="text-center mb-4">Sign In</h2>
            {message && <Alert variant="danger">{message}</Alert>}
            <Form class={['signin']} onSubmit={handleSubmit}>
                <Input {...props.email} type="email"/>
                <Input {...props.password} type={type === '' ? 'password' : type}/>
                <Checkbox {...props.checkbox} onclick={handleCheckbox}/>
                <Button {...props.button}>Sign In</Button>
            </Form>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
        </>
    )
}

export default Signin
