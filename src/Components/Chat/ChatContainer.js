import React from "react"

import {Grid, GridItem} from "@chakra-ui/react"

import {ChatInput} from "./ChatInput"
import {ChatLog} from "./ChatLog"
import {ChatRooms} from './ChatRooms'

export const ChatContainer = () => {
	return (
		<Grid
			h='100%'
			w='100%'
			templateRows="repeat(12, 1fr)"
			templateColumns="repeat(14, 1fr)"
			gap={1}
		>
			<GridItem colSpan={1} rowSpan={12}>
				<ChatRooms/>
			</GridItem>
			<GridItem colSpan={13} rowSpan={9}>
				<ChatLog />
			</GridItem>
			<GridItem colSpan={13} rowSpan={3}>
				<ChatInput />
			</GridItem>
		</Grid>
	)
}

export default ChatContainer
