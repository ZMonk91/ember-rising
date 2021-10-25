import React from "react"
import {Container} from "reactstrap"
import {useSelector} from "react-redux"

export function ChatLog() {
    const messages = useSelector(state => state.chat.messages)

    const formattedMessages = () => messages.map(message => {
        return <div>{message}</div>
    })

	return <Container className="ChatLog">{formattedMessages().reverse()}</Container>
}

export default ChatLog
