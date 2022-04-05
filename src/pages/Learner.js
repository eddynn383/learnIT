import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import { Container, Card, Button, Alert } from 'react-bootstrap'

const Learner = () => {
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { signout, currentUser } = useAuth()

    const handleLogout = async () => {
        setMessage('')

        try {
            await signout();
            navigate('/signin');
            setMessage("Log out successfully!")
        } catch (error) {
            setMessage("Failed to log out")
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        {message && <Alert variant="danger">{message}</Alert>}
                        <h2>Profile</h2>
                        <p>You are logged in as an Learner!</p>
                        <Alert variant="secondary">{currentUser && currentUser.email}</Alert>
                        <Button onClick={handleLogout} className="w-100" type="submit">Sign Out</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Learner
