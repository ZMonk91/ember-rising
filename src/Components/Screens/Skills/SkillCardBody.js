import React from "react"

import {Flex, Box} from "@chakra-ui/react"

export const SkillCardBody = (props) => {
	const skill = props.skill

	return (
		<Flex
			as="dl"
			direction={{
				base: "column",
				sm: "row"
			}}
			px="6"
			py="4"
		>
			<Box as="dt" mr={2}>
				Level
			</Box>
			<Box as="dd" flex="1" fontWeight="semibold">
				{skill.level}
			</Box>
			{skill.xp}/{skill.nextLevel}
		</Flex>
	)
}
