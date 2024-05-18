import {Row, Col} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";


function Header() {
    return (
        <Fade>
            <Row>
                <Col sm={"12"} className={"justify-content-center text-center"}>
                    <div className={"title"}>
                        قائمة الطعام
                    </div>
                    <div className={"underline mx-auto"}></div>
                </Col>
            </Row>
        </Fade>
    )
}

export default Header