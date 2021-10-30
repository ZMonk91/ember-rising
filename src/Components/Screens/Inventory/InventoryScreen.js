import React from "react"
import {
	Flex,
	Spacer,
	Text,
	Box,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	// Button,
	// Slider,
	// Center,
	// SliderTrack
} from "@chakra-ui/react"
import {Item} from "./Item"
import { EquipmentScreen } from "./EquipmentScreen"

export const InventoryScreen = () => {
	return (
		<Flex justifyContent="space-around" height="100%">
			<Box width="100%">
				<h4>Inventory</h4>
				<Tabs size="md" variant="enclosed">
					<TabList>
						<Tab>Backpack</Tab>
						<Tab>House Storage</Tab>
						<Text pl="4">3 / 3</Text>
					</TabList>

					<TabPanels border="1px" borderColor="rgba(255, 255, 255, 0.16)">
						<TabPanel>
							<Item /> <Item /> <Item /> <Item /> <Item /> <Item />
							<Item /> <Item /> <Item /> <Item /> <Item /> <Item />
							<Item /> <Item /> <Item /> <Item /> <Item /> <Item />
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
			<Spacer />
			<Box width="100%" borderLeft="1px">
				Equipment
				<EquipmentScreen/>
			</Box>
		</Flex>
	)
}
