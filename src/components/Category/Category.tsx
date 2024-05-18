import {Row, Col} from "react-bootstrap";
import {Fade} from "react-awesome-reveal";

interface categoryProps{
    filterByCategory:(category:string)=>void;
    allCategory:string[];
}

function Category(props: categoryProps) {
    const onFilter = (category:string)=>{
        props.filterByCategory(category);
    }
    return (
        <Fade>
            <Row className={"mt-3 mb-5"}>
                <Col sm={"12"} className={"d-flex justify-content-center"}>
                    <div>
                        {props.allCategory.map(category=> (
                            <button key={category} onClick={() => onFilter(category)} style={{border: "1px solid #b45b35"}}
                                    className={"btn mx-2"}>{category}</button>
                        ))}
                    </div>
                </Col>
            </Row>
        </Fade>
    )
}

export default Category