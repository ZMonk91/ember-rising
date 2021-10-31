import React from "react"
import { CircularProgress, CircularProgressLabel} from "@chakra-ui/progress"
import { Center, Box } from '@chakra-ui/react'



export const NavbarSkillProgress = (props) => {
    const skill = props.skill
    return (

				<CircularProgress
					size="4rem"
					value={(skill.xpGainedThisLevel / skill.xpNeededThisLevel) * 100}
				>
					<CircularProgressLabel color="orange.400">
						<Center>
							<Box fontSize="1rem">
								{skill.icon()}
								<Box as="span" fontWeight="semibold">
									{skill.level}
								</Box>
							</Box>
						</Center>
					</CircularProgressLabel>
				</CircularProgress>
		)
}