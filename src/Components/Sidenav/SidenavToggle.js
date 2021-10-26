import React from "react";
import {Box} from '@chakra-ui/react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

export const SidenavToggle = ({isOpen, toggle}) => {
    return(
        <Box onClick={toggle} float="right">
            {isOpen? <AiOutlineArrowLeft/> : <AiOutlineArrowRight/>}
        </Box>
    )
}