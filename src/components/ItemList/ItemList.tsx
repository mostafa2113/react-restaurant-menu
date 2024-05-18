import {Row, Col, Card} from "react-bootstrap";
import IItem from "../../interfaces/IItem.ts";
import {Zoom} from "react-awesome-reveal";

interface itemListProps{
    itemsData:IItem[];
}

function IteamList(props:itemListProps) {
    const itemsData = props.itemsData;
    return (
        <Zoom>
            <Row>
                {itemsData.length>=1?itemsData.map(item=>(
                    <Col lg={12} sm={12} className={"mb-3"} key={item.id}>
                        <Card className={"d-flex flex-row"} style={{backgroundColor:"#f8f8f8"}}>
                            <Card.Img variant="top" src={item.imgUrl} className={"img-item"}/>
                            <Card.Body>
                                <Card.Title>
                                    <div className={"d-flex justify-content-between"}>
                                        <div className={"item-title"}>
                                            {item.title}
                                        </div>
                                        <div className={"item-price"}>
                                            {item.price} جنيه
                                        </div>
                                    </div>
                                </Card.Title>
                                <Card.Text className={"py-3"}>
                                    <div className={"item-description"}>
                                        {item.description}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )):<h3 className={"alert alert-danger"}>لا يوجد وجبات حالياً</h3>}
            </Row>
        </Zoom>
    )
}

export default IteamList