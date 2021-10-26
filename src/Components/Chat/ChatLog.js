import React from "react"
import {Container, Box} from "@chakra-ui/react"
import {useSelector} from "react-redux"

export function ChatLog() {
    const messages = useSelector(state => state.chat.messages)

    const formattedMessages = () => messages.map(message => {
        return <Box className='revised'>{message}</Box>
    })

	return (
		<Container
			h="100%"
			minW="100%"
			ml={2}
			backgroundColor="#2c323d"
			display="inline-flex"
			flexDirection="column-reverse"
			overflowY="auto"
		>
			{formattedMessages().reverse()}
		</Container>
	)
}

export default ChatLog
