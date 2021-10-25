import React from "react";
import { Col, Container, Row } from "reactstrap";
import { WoodcuttingCard } from "./WoodCuttingCard";

export function WoodcuttingScreen(){
    return(
        <Container>
        <Row>
            <Col>
                <WoodcuttingCard/>
            </Col>
        </Row>
            WoodcuttingScreen
        </Container>
    )
}