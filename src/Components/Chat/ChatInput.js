import React, {useState} from "react"
import {
	Button as old4,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Input as old1,
	InputGroup as old2,
	InputGroupAddon as old3,
} from "reactstrap"
import {Box, Input, InputGroup, InputRightAddon, Button, ButtonGroup,  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon} from '@chakra-ui/react'

import {useDispatch, useSelector} from "react-redux"
import {addMessage} from "../../features/chat/chatSlice"

export function ChatInput() {
	const username = useSelector((state) => state.user.username)
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
		setValue("")
		return (
			<Box display='flex' w='100%' fontSize='sm' pl='0.2'>
				<Box width='max-content' color='GrayText'>[{timeString}]</Box>
				<Box width='max-content' fontWeight='semibold'>{username}: </Box>
				<Box width='max-content' ml={1}>{value}</Box>
			</Box>

		)
	}

	return (
		<InputGroup>
			<Input
				type="text"
				placeholder="Enter a message..."
				onChange={handleInput}
				onKeyPress={handleKeypress}
				value={value}
			/>
			<InputRightAddon
				children={"Enter"}
				cursor="pointer"
				type="submit"
				onClick={() => {
					dispatch(addMessage(formatMessage()))
				}}
			/>
		</InputGroup>
	)
}

export default ChatInput
