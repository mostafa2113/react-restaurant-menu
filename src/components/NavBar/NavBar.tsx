import {Nav, Navbar, Form, Container,} from "react-bootstrap";
import style from "./navbar.module.css";
import {useState} from "react";

interface NavBarProps {
    filterbySearch:(title:string)=>void
}

function NavBar(props:NavBarProps) {

    const [title, setTitle] = useState("")
    const onSearch =(event: { preventDefault: () => void; })=>{
        event.preventDefault();
        props.filterbySearch(title);
        setTitle("");
    }
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
                    <Form className="d-flex" method={"get"}>
                        <Form.Control
                            value={title}
                            onChange={(event)=>{setTitle(event.target.value)}}
                            type="text"
                            placeholder="ابحث ..."
                            className={`mx-2 ${style.search}`}
                            style={{
                                backgroundColor: 'white',
                                color: 'black',
                            }}
                        />
                        <button className="btn-search" onClick={onSearch}>بحث</button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;