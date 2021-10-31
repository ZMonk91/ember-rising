import React from "react";
import {Box, IconButton} from '@chakra-ui/react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

export const SidenavToggle = ({isOpen, toggle}) => {


    return (
			<Box
				ml={1}
				onClick={toggle}
				float="right"
				cursor="pointer"
				bg="gray.700"
				_hover={{bg: "gray.600", transition: "all 0.5s ease-in-out"}}
				p={1}
				borderRadius={"50%"}
			>
				{isOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
			</Box>
		)
}