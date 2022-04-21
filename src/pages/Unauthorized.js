import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Alert } from 'react-bootstrap';

const Unauthorized = () => {
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { signout, currentUser } = useAuth()

    const goBack = () => navigate(-1);

    const handleLogout = async () => {
        setMessage('')
        console.log(currentUser && currentUser)
        try {
            await signout();
            navigate('/signin')
        } catch (error) {
            setMessage("Failed to log out")
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        {message && <Alert variant="success">{message}</Alert>}
                        <h2>Unauthorized</h2>
                        <p>You do not have access to the requested page.</p>
                        <Alert variant="secondary">{currentUser && currentUser.email}</Alert>
                        <Button onClick={handleLogout} className="w-100 mb-4" type="submit">Logout</Button>
                        <Button onClick={goBack} className="w-100" type="submit">Go Back</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Unauthorized