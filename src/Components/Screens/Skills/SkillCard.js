import React from "react"
import {
	Box,
	Heading,
	Progress,
	Flex,
	Center
} from "@chakra-ui/react"
import {Link} from "react-router-dom"

export function SkillCard(props) {
	props = props.props

	const linkHandler = (link = null) => {
		if (link) {
			return link
		} else {
			return "/"
		}
	}

	return (

		<Box
			rounded={{
				md: "lg"
			}}
			shadow="base"
			overflow="hidden"
			maxW="10rem"
			maxH="10rem"
			m={1}
			bg="#2c323d"
		>
		<Link to={linkHandler(props.link)}>
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
					{props.level}
				</Box>
				{props.xp}/{props.nextLevelXp}
			</Flex>
			<Progress value={1} />
		</Link>
		</Box>
	)
}
