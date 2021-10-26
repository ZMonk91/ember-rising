import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"

import {
	Box,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	InputGroup,
	InputRightAddon
} from "@chakra-ui/react"
import {changeUsername} from "../../../features/user/userSlice"

export function SettingsScreen() {
	const username = useSelector((state) => state.user.username)
	const [name, setName] = useState(username)
	const dispatch = useDispatch()

	const handleFormSubmission = (e) => {
		e.preventDefault()
	}

	const handleUsernameChanges = (e) => {
		setName(e.target.value)
	}

	const handleKeypress = (e) => {
		if (e.charCode === 13) {
			handleUsernameSubmission()
		}
	}

	const handleUsernameSubmission = () => {
		dispatch(changeUsername(name))
	}
	return (
		<Box>
			<FormControl id="email">
				<FormLabel>Change Username</FormLabel>
				<InputGroup>
					<Input
						type="text"
						w="25%"
						placeholder={username}
						onChange={handleUsernameChanges}
						onKeyPress={handleKeypress}
					/>
					<InputRightAddon cursor="pointer" onClick={handleUsernameSubmission}>
						Change
					</InputRightAddon>
				</InputGroup>
				<FormHelperText>
					You are only allowed this one time...Make sure you like it.
				</FormHelperText>
			</FormControl>
		</Box>
	)
}

export default SettingsScreen
