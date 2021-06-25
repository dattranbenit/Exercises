import logo from '../../assets/images/400x300.png';
import React from 'react'
import {
    Col,
    Row,
    Card,
    CardImg,
    CardText,
    CardBody,
    Button
} from "reactstrap";
import '../../assets/scss/index.scss'

const SmallCard = (props) => {
    return (
        <Card style={{padding: "20px", margin: "12px"}}>
            <CardImg
                top
                width="400px"
                height="300px"
                src={logo}
                alt="Card image cap"
            />
            <CardBody>
                <Col>
                    <Row className="card__content">
                        <CardText className="card__content--position">
                            {props.content}
                        </CardText>
                    </Row>
                    <Row className="card__button--position">
                        <Button className="card__button">READ MORE</Button>
                    </Row>
                </Col>
            </CardBody>
        </Card>
    );
}

export default SmallCard;