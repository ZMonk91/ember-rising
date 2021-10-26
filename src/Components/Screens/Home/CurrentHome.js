import React from "react";
import {
	Flex,
	Box,
	Heading,
	Text
} from "@chakra-ui/react"
import { HomeStats } from "./HomeStats";

export const CurrentHome = () => {

    return (
			<Flex justifyContent="space-around">
				<Box>
					<Heading mb="3">Current House</Heading>
					<Text fontSize="xl">Homeless</Text>
					<Text fontSize="md">You currently don't have a home. Go build one!</Text>
				</Box>
				<Box>
					<HomeStats />
				</Box>
			</Flex>
		)
}