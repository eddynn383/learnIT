import React, { useState, useRef } from "react";
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';


const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const { signin, getDB, setCurrentUser } = useAuth()

    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    console.log(location)

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
            }

            navigate(from, { replace: true })
        } catch (error) {
            setMessage('Failed to sign in')
            console.log(error)
        }
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
                            <h2 className="text-center mb-4">Sign In</h2>
                            {message && <Alert variant="danger">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className="mb-4">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type={type === '' ? 'password' : type} ref={passwordRef} required />
                                </Form.Group>
                                <Form.Check type="checkbox" id="show-password" label="Show Password" className="mb-4" onClick={handleCheckbox}/>
                                <Button disabled={loading} className="w-100" type="submit">Sign In</Button>
                                {/* <Button onClick={handleClick} className="w-100" type="submit">Get Role</Button> */}
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Signin
