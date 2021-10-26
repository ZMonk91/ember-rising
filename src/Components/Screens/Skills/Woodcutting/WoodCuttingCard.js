import React from "react";
import {  CardText, CardTitle } from "reactstrap";
import {Flex, Text, Button, Box, Image, Grid, GridItem} from "@chakra-ui/react"
import Card from '../../../Card/Card'
import CardHeader from "../../../Card/CardHeader"
import CardBody from "../../../Card/Card"
import grassland_bg from './images/grassland_bg.jpeg'

export function WoodcuttingCard(props){
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
							<Text align="center" fontSize='2xl'>Savanna</Text>
						</GridItem>
						<GridItem colSpan={3} rowStart={5} rowSpan={1}><Text>1L 5.8s</Text>
						</GridItem>
						<GridItem colSpan={3} rowStart={6}>
							<Button bg='green.400' w='100%' borderRadius={0}>Search</Button>
						</GridItem>
					</Grid>
				</Box>
			</Box>
		)
}