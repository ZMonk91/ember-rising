import React from "react";
import { Flex } from "@chakra-ui/react";
import { ChatRoomButton } from "./ChatRoomButton";

export const ChatRooms = () => {
	const RoomList = {
		General: {
			title: 'General',
			channel: 'General'
		},
		Activity: {
			title: 'Activity',
			channel: 'Activity'
		},
		Trade: {
			title: 'Trade',
			channel: 'Trade'
		}
	}
        return (
					<Flex direction="column">
						<ChatRoomButton room={RoomList.General} />
						<ChatRoomButton room={RoomList.Activity} />
						<ChatRoomButton room={RoomList.Trade} />
					</Flex>
				)
    }
