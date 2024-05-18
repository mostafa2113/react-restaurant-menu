import {Nav, Navbar, Form, Container,} from "react-bootstrap";
import style from "./navbar.module.css";

function NavBar() {
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#">
                    <div className="brand-color">المطعم</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="ابحث ..."
                            className={`mx-2 ${style.search}`}
                            style={{
                                backgroundColor: 'white',
                                color: 'black',
                            }}
                        />
                        <button className="btn-search">بحث</button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;