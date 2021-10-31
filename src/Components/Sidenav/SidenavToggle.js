import React from "react"
import {IconButton} from "@chakra-ui/react"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

export const SidenavToggle = ({isOpen, toggle}) => {
	return (
		<IconButton
			mt={2}
			width='92%'
			icon={isOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
			onClick={toggle}
		></IconButton>
	)
}
