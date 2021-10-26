import React from "react"
import {Link as Reachlink, Box, HStack} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"

export const SidenavItem = ({isOpen, ...props}) => {
	props = props.props
	// const toggleVisibility = () => {
	// 	if (isOpen) {
	// 		return "unset"
	// 	} else return "none"
	// }
	return (
		<NavLink as={Reachlink} to={props.location}>
			<HStack>
				<Box> {props.icon()}</Box>
				<Box display={isOpen ? "unset" : "none"}>{props.name}</Box>
			</HStack>
		</NavLink>
	)
}
