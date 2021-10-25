import React, {useState} from "react"
import {
	Button,
	Col,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Input,
	InputGroup,
	InputGroupAddon,
	Row
} from "reactstrap"

import {useDispatch, useSelector} from "react-redux"
import {addMessage} from "../../features/chat/chatSlice"

export function ChatInput() {
	const username = useSelector(state => state.user.username)
	const [value, setValue] = useState("")

	const dispatch = useDispatch()

	const handleInput = (e) => {
		setValue(e.target.value)
	}

	const handleKeypress = (e) => {
		if (e.charCode === 13) {
			dispatch(addMessage(formatMessage(value)))
		}
	}

	const formatMessage = () => {
		const date = new Date()
		const timeString = date.toLocaleTimeString()
		// const timeStamp = <div className="Chat--timestamp">[{timeString}]</div>
		// const formattedMessage = {timeStamp}`Username : ${value}`
		setValue("")
		return <Row className="Chat--message-row"><div className="Chat--timestamp">[{timeString}]</div><div className="Chat--username">{username}: </div><div className="Chat--message">{value}</div></Row>
	}

	return (
		<InputGroup>
			<Input
				className="ChatInput"
				placeholder="Enter a message..."
				onChange={handleInput}
				onKeyPress={handleKeypress}
				value={value}
			/>

			<InputGroupAddon className="ChatInputGroup" addonType="append">
				<DropdownToggle className="ChatInputButton" outline split caret>
					{""}
				</DropdownToggle>
				<Button
					type="submit"
					className="ChatInputButton"
					outline
					onClick={() => {
						dispatch(addMessage(formatMessage()))
					}}
				>
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

export default ChatInput
