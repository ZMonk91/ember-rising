import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {
	addXp,
	addLevel,
	updateNextLevel
} from "../../../../features/skills/skillsSlice"

import {Text, Button, Box, Grid, GridItem} from "@chakra-ui/react"
import grassland_bg from "./images/grassland_bg.jpeg"

export function WoodcuttingCard(props) {
	const dispatch = useDispatch()

	const xp = useSelector((state) => state.skills.woodcutting.xp)
	const skills = useSelector((state) => state.skills)

	const idleAction2 = (obj) => {
		const {skill, time, value} = obj
		setTimeout(() => {
			dispatch(addXp({skill, value}))
		}, time)
	}
	const idleAction = (obj) => (dispatch) => {
		// const {skill, time, value} = obj
		console.log(obj)
		setTimeout(() => {
			dispatch(addXp({skill: obj.skill, value: obj.value}))
		}, obj.time)
	}

	const handleAction = () => {
		if (xp >= skills.woodcutting.nextLevel) {
			dispatch(addLevel({skill: "woodcutting"}))
			dispatch(updateNextLevel({skill: "woodcutting"}))
		}
		idleAction2({skill: "woodcutting", time: 2000, value: 5})
		// dispatch(addXp({skill: "woodcutting", value: 4}))
	}
	return (
		<Box
			h={{sm: "8rem", lg: "12rem"}}
			w={{sm: "8rem", lg: "12rem"}}
			//
			backgroundImage={grassland_bg}
			bgPosition="6% 39%"
		>
			<Box w="100%" h="100%" pos="relative" backgroundColor="rgba(0,0,0,0.15)">
				<Grid
					h="100%"
					templateRows="repeat(6, 1fr)"
					templateColumns="repeat(3, 1fr)"
					gap={0}
					opacity={1}
				>
					<GridItem rowSpan={1} colSpan={3}>
						<Text align="center" fontSize="2xl">
							Savanna
						</Text>
					</GridItem>
					<GridItem colSpan={3} rowStart={5} rowSpan={1}>
						<Text>1L 5.8s</Text>
					</GridItem>
					<GridItem colSpan={3} rowStart={6}>
						<Button
							bg="green.400"
							w="100%"
							borderRadius={0}
							onClick={handleAction}
						>
							Search
						</Button>
					</GridItem>
				</Grid>
			</Box>
			Current Xp: {xp} / {skills.woodcutting.nextLevel}
			Level: {skills.woodcutting.level}
		</Box>
	)
}
