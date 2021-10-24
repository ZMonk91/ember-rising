import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import ChatInput from "./ChatInput";
import ChatLog from "./ChatLog";
import ChatRooms from "./ChatRooms";


class ChatContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
					<Row className="ChatContainer">
						<Col md={1}>
							<ChatRooms />
						</Col>
						<Col>
							<ChatLog />
						</Col>
						<Row>
                        <Col md={1}/>
							<Col>
								<ChatInput />
							</Col>
						</Row>
					</Row>
				)
    }
}

export default ChatContainer