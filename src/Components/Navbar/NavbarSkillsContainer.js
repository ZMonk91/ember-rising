import React from "react"
import {Box, Flex, Divider} from "@chakra-ui/react"
import { NavbarSkill } from "./NavbarSkill"
import {useSpring, animated, config} from "react-spring"

export const NavbarSkillsContainer = (props) => {

      const fade = useSpring({
		  to: {opacity: 1},
		from: {opacity: 0},
	  config: {
		  		delay: 4000, duration: 1000
		  	}
		})

		const stretch = useSpring({
			from: {width: '0%'},
			to: {width: '100%'},
			config: {...config.wobbly, duration: 1000}
		})

	return (
		<Box w="100%" my={3}>
				<animated.div style={stretch}>
					{" "}
					<Divider mb={2} />
				</animated.div>

				<animated.div style={fade}>
					<Flex>
						<NavbarSkill skill={"woodcutting"} />
						<NavbarSkill skill={"fishing"} />
						<NavbarSkill />
					</Flex>
				</animated.div>
			</Box>
	)
}
