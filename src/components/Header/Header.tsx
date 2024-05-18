import {Row, Col} from "react-bootstrap";


function Header() {
    return (
        <Row>
            <Col sm={"12"} className={"justify-content-center text-center"}>
                <div className={"title"}>
                    قائمة الطعام
                </div>
                <div className={"underline mx-auto"}></div>
            </Col>
        </Row>
    )
}

export default Header