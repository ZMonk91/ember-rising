import React from "react"
import {IconButton, Badge, Box, Tooltip} from "@chakra-ui/react"
import {GiStoneAxe} from "react-icons/gi"

export const Item = () => {
	return (
		<Box display="inline-flex" position="relative">
			<Tooltip label="Stone Axe">
				<IconButton
					colorScheme="teal"
					size="lg"
					mx="1"
					my="1"
					bottom="0"
					z-index="1"
					icon={<GiStoneAxe />}
				/>
			</Tooltip>
			<Badge
				position="absolute"
				variant="solid"
				// #3b414c
				bgColor="rgba(0,0,0,0)"
				bottom="1"
				left="1"
				z-index="10"
			>
				1
			</Badge>
		</Box>
	)
}
