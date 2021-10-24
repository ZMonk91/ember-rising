import React, {Component} from "react"
import {Badge, Card, CardBody, CardText, CardTitle, Col, ListGroup, ListGroupItem, ListGroupItemHeading, Row} from "reactstrap"

class CurrentHouse extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Row>
				<Col md={4}>
					<h2>Homeless</h2>
					<p>You currently don't have a home. Go build one!</p>
				</Col>
				<Col>
					<ListGroup>
						<ListGroupItemHeading>Stats</ListGroupItemHeading>
						<ListGroupItem className="justify-content-between">
							Lot Size: <Badge>0</Badge>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							Storage: <Badge>0</Badge>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							Villagers: <Badge pill>0</Badge>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							Tax: <Badge pill>0</Badge>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							Production: <Badge pill>0</Badge>
						</ListGroupItem>
					</ListGroup>
				</Col>
			</Row>
		)
	}
}

export default CurrentHouse
