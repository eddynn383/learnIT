import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Alert } from 'react-bootstrap';

const Tutor = () => {
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { signout, currentUser } = useAuth()

    console.log(currentUser && currentUser)

    const handleLogout = async () => {
        setMessage('')

        try {
            await signout();
            navigate('/signin');
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
                        <p>You are logged in as an Tutor!</p>
                        <Alert variant="secondary">{currentUser && currentUser.email}</Alert>
                        <Button onClick={handleLogout} className="w-100" type="submit">Sign Out</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Tutor
