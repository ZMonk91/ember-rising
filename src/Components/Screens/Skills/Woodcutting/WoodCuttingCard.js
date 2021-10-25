import React from "react";
import { Button, Card, CardText, CardTitle } from "reactstrap";


export function WoodcuttingCard(props){
    return (
			<Card className="WoodcuttingCard">
				<img
					className="ActionCard--image"
					width="100%"
					src={require('./images/grassland_bg.jpeg').default}
					alt=""
				/>
				<CardTitle tag="h5" className="ActionCard--Title">
					title
				</CardTitle>
				<CardText className="ActionCard--text">
					1 2.33 5 xp/hr 10 minutes
				</CardText>
				<Button className="ActionCard--button">Search</Button>
			</Card>
		)
}