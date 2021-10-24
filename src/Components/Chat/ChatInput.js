import React, {Component} from "react"
import {
	Button,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupButtonDropdown,
	InputGroupText
} from "reactstrap"

class ChatInput extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<InputGroup>
				<Input className="ChatInput" placeholder="Enter a message..." />

				<InputGroupAddon className="ChatInputGroup" addonType="append">
					<DropdownToggle className="ChatInputButton" outline split caret>
						{" "}
					</DropdownToggle>
					<Button className="ChatInputButton" outline>
						{" "}
						Send
					</Button>

					<DropdownMenu>
						<DropdownItem> ;) </DropdownItem>
						<DropdownItem> :D </DropdownItem>
						<DropdownItem> :p </DropdownItem>
					</DropdownMenu>
				</InputGroupAddon>
			</InputGroup>
		)
	}
}

export default ChatInput
