import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        <h1>Oops!</h1>
                        <p>Page Not Found</p>
                        <Link to="/">Visit Our Homepage</Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Missing