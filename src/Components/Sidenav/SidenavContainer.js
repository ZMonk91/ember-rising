import React from "react"
import {Grid, GridItem} from "@chakra-ui/react"
import {SidenavItem} from "./SidenavItem"
import {SIDEBARITEMS} from "./SidenavList"
import {SidenavToggle} from "./SidenavToggle"

export const SidenavContainer = ({isOpen, toggle}) => {
	const SideLinks = SIDEBARITEMS

	return (
		<Grid
			templateColumns="repeat(3,1fr)"
			templateRows="repeat(12, 1fr)"
			gap={2}
		>
			<GridItem rowSpan={1} colSpan={3} width="100%" height="100%">
				<SidenavToggle isOpen={isOpen} toggle={() => toggle()} />
			</GridItem>
			{SideLinks.map((link, index) => {
				if (index <= 5) {
					return (
						<GridItem rowSpan={1} colSpan={3} width="100%" height="100%">
							<SidenavItem isOpen={isOpen} props={link} />
						</GridItem>
					)
				} else {
					/* Space the last two links out */

					return (
						<GridItem rowSpan={1} colSpan={3} width="100%" rowStart={index + 5}>
							<SidenavItem isOpen={isOpen} props={link} />
						</GridItem>
					)
				}
			})}
		</Grid>
	)
}
