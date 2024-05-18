import {Row, Col} from "react-bootstrap";


function Category() {
    return (
        <Row className={"mt-3 mb-5"}>
            <Col sm={"12"} className={"d-flex justify-content-center"}>
                <div>
                    <button style={{border:"1px solid #b45b35"}} className={"btn mx-2"}>الكل</button>
                    <button style={{border:"1px solid #b45b35"}} className={"btn mx-2"}>فطار</button>
                    <button style={{border:"1px solid #b45b35"}} className={"btn mx-2"}>غذاء</button>
                    <button style={{border:"1px solid #b45b35"}} className={"btn mx-2"}>عشاء</button>
                </div>
            </Col>
        </Row>
    )
}

export default Category