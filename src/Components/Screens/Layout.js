import React from "react"
import {Grid, GridItem} from "@chakra-ui/react"
import {SidenavContainer} from "../Sidenav/SidenavContainer"
import {GameScreenContainer} from "./GameScreenContainer"
import ChatContainer from "../Chat/ChatContainer"

export const Layout = () => {
	const [isOpen, setIsOpen] = React.useState(true)

	const toggle = () => setIsOpen(!isOpen)

	return (
		<Grid
			h="90vh"
			templateRows="repeat(12, 1fr)"
			templateColumns="repeat(24,1fr)"
			gap={4}
			width="100%"
		>
			<GridItem
				colSpan={isOpen ? 2 : 1}
				rowSpan={12}
				width="100%"
				ml={2}
			>
				<SidenavContainer isOpen={isOpen} toggle={toggle} />
			</GridItem>
			<GridItem
				colSpan={isOpen ? 22 : 23}
				rowSpan={8}
				// borderLeft="1px"
				borderBottom="1px"
				borderBottomLeftRadius="0px"
			>
				<GameScreenContainer />
			</GridItem>
			<GridItem colSpan={isOpen ? 22 : 23} rowSpan={4}>
				<ChatContainer />
			</GridItem>
		</Grid>
	)
}
