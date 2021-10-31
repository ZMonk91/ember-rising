import React from "react"
import {Box, HStack, Button} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"

export const SidenavItem = ({isOpen, ...props}) => {
	props = props.props

	return (
		<NavLink to={props.location} style={{width: "100%"}}>
			<HStack width="100%">
				<Box bg="none" width="100%" pr={2}>
					<Button
						leftIcon={props.icon()}
						flexDirection="column"
						isFullWidth
						pl={isOpen ? 4 : 6}
						height={isOpen ? "4rem" : "2rem"}
						fontSize={isOpen ? "lg" : "2xl"}
						transition="all 0.4s cubic-bezier(.08,.52,.52,1)"
					>
						<Box
							display={isOpen ? "contents" : "none"}
							fontSize={"sm"}
							fontWeight="light"
							mt={2}
						>
							{isOpen && props.name}
						</Box>
					</Button>
				</Box>
			</HStack>
		</NavLink>
	)
}
