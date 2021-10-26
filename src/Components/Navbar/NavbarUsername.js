import React from "react"
import {Box, Text} from "@chakra-ui/react"
import {useSelector} from "react-redux"

export const NavbarUsername = (props) => {
    const username = useSelector((state) => state.user.username)
	return (
		<Box {...props}>
			<Text fontSize="lg" fontWeight="bold">
				{username}
			</Text>
		</Box>
	)
}
