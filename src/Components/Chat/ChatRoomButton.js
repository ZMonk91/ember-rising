import React from 'react'
import {Button} from '@chakra-ui/react'

export const ChatRoomButton = (props) => {
    return (
			<Button
				boxSize="initial"
				justifyContent="flex-start"
				alignItems="center"
				boxShadow="gray.900"
				bg="gray.700"
				// transition={variantChange}
				mb={{
					xl: "12px"
				}}
				mx={{
					xl: "auto"
				}}
				ps={{
					sm: "10px",
					xl: "16px"
				}}
				py="12px"
				borderRadius="15px"
				_hover="none"
				w="100%"
				_active={{
					bg: "inherit",
					transform: "none",
					borderColor: "transparent"
				}}
				_focus={{
					boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.04)"
				}}
				my="auto"
				fontSize="sm"
			>
				{props.room.title}
			</Button>
		)
}