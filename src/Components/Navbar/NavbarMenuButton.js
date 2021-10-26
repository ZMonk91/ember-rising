import React from "react"
import {Box} from "@chakra-ui/react"
import {VscThreeBars} from "react-icons/vsc"

export const NavbarMenuButton = ({toggle}) => {
	return (
		<Box display={{base: "block"}} onClick={toggle}>
			<VscThreeBars />
			{/* {isOpen ? <CloseIcon /> : <MenuIcon />} */}
		</Box>
	)
}
