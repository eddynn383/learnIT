import React, { useState, useRef } from "react";
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase"

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { signin, currentUser, setCurrentRole, currentRole } = useAuth()
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setMessage('')
            setLoading(true)

            const res = await signin(emailRef.current.value, passwordRef.current.value)
            const user = res.user
            const docRef = doc(db, "users", user.uid)
            const docSnap = await getDoc(docRef)
            const elem = docSnap.data()

            if (docSnap.exists()) {
                console.log("Document data:", elem.role);
                setCurrentRole(elem.role)
            } else {
                console.log("No such document!");
            }

            if (currentUser) {
                console.log(currentUser)
                console.log(currentRole)
            }
            console.log(from)
            navigate(from, { replace: true })
            setMessage('Sign in was successfully!')
        } catch (error) {
            setMessage('Failed to sign in')
            console.log(error)
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
                                <Button disabled={loading} className="w-100" type="submit">Sing In</Button>
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
