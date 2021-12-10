import { Nav, Navbar, Container } from 'react-bootstrap';
import axios from 'axios';

export default function Header() {

    const onLogout = () => {
        axios.get('http://localhost:4000/logout')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">POCNIC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/review/create">review</Nav.Link>
                        <Nav.Link href="/mypage/home">mypage</Nav.Link>
                        <Nav.Link href="/auth/login" onClick={onLogout}>login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}
