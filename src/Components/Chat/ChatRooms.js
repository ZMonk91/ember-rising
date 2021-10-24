import React, {Component} from "react";
import { Button, ButtonGroup } from "reactstrap";

class ChatRooms extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
					<div>
						<ButtonGroup vertical className='ChatRoomButtons'>
							<Button>General</Button>
							<Button>Activity</Button>
							<Button>Trade</Button>
						</ButtonGroup>
					</div>
				)
    }
}

export default ChatRooms