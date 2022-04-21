import React, { useState, useRef } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';
// const ROLE = 100

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()

    const { signup, setDB, currentUser } = useAuth()

    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)
    const [messageType, setMessageType] = useState('success')

    console.log(currentUser && currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setMessage('Confirmation Password don\'t match')
        }

        try {
            setLoading(true)
            const res = await signup(emailRef.current.value, passwordRef.current.value)
            const user = res.user
            
            await setDB('users', user.uid, {
                uid: user.uid,
                roles: [100],
                email: user.email
            })

            setMessageType('success')
            setMessage('User was successfully created!')
        } catch (err) {
            console.log(err)
            setMessageType('danger')
            setMessage('Failed to create an account')
        }

        setLoading(false)
    }

    const handleCheckbox = (e) => {
        e.target.checked ? setType('text') : setType('password')
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {message && <Alert variant={messageType}>{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type={type === '' ? 'password' : type} ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group id="password-confirmation" className="mb-4">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type={type === '' ? 'password' : type} ref={passwordConfirmationRef} variant="danger" required />
                                </Form.Group>
                                <Form.Check type="checkbox" id="show-password" label="Show Password" className="mb-4" onClick={handleCheckbox}/>
                                <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/signin">Sign In</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signup