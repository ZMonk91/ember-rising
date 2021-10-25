import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import {
	Container,
	Form,
	FormGroup,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Label
} from "reactstrap"
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
		<Container>
			<Form onSubmit={handleFormSubmission}>
				<FormGroup>
					<Label for="username">Username</Label>
					<InputGroup>
						<Input
							type="text"
							name="username"
							id="username"
							placeholder={username}
							onChange={handleUsernameChanges}
							onKeyPress={handleKeypress}
						></Input>
						<InputGroupAddon type="append">
							<InputGroupText type="submit" onClick={handleUsernameSubmission}>
								Change
							</InputGroupText>
						</InputGroupAddon>
					</InputGroup>
				</FormGroup>
			</Form>
		</Container>
	)
}

export default SettingsScreen
