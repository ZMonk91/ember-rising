import React from "react"
import {Flex, Heading, Center} from "@chakra-ui/react"

export const SkillCardHeader = (props) => {
	return (
		<Flex
			align="center"
			justify="space-evenly"
			px="6"
			py="4"
			borderBottomWidth="1px"
			direction="column"
			textAlign="center"
		>
			<Heading fontSize="lg">
				<Center>{props.icon()}</Center>
			</Heading>
			<Heading fontSize="lg">
				<Center>{props.title}</Center>
			</Heading>
		</Flex>
	)
}
