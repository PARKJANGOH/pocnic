import { Nav, Navbar, Container } from 'react-bootstrap';

export default function Header() {
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">POCNIC</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/review/create">review</Nav.Link>
                        <Nav.Link href="/mypage/home">mypage</Nav.Link>
                        <Nav.Link href="/auth/login">logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}