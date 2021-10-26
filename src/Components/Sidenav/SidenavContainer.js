import React from "react";
import {Grid, GridItem} from '@chakra-ui/react'
import { SidenavItem } from "./SidenavItem";
import { SIDEBARITEMS } from "./SidenavList";
import { SidenavToggle } from "./SidenavToggle";

export const SidenavContainer = ({isOpen, toggle}) =>{
    const SideLinks = SIDEBARITEMS;


    return (
			<Grid
				templateColumns="repeat(3,1fr)"
				templateRows="repeat(12, 1fr)"
				gap={2}
			>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavToggle isOpen={isOpen} toggle={() => toggle()} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavItem isOpen={isOpen} props={SideLinks[0]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavItem isOpen={isOpen} props={SideLinks[1]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavItem isOpen={isOpen} props={SideLinks[2]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavItem isOpen={isOpen} props={SideLinks[3]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavItem isOpen={isOpen} props={SideLinks[4]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3}>
					<SidenavItem isOpen={isOpen} props={SideLinks[5]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3} rowStart={11}>
					<SidenavItem isOpen={isOpen} props={SideLinks[6]} />
				</GridItem>
				<GridItem rowSpan={1} colSpan={3} rowStart={12}>
					<SidenavItem isOpen={isOpen} props={SideLinks[7]} />
				</GridItem>
			</Grid>
		)
}