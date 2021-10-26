import React from "react"
import {Route, Routes} from "react-router"
import AchievementsScreen from "../Components/Screens/Achievements/Achievements"
import AdventureScreen from "../Components/Screens/Adventure/Adventure"
import CombatScreen from "../Components/Screens/Combat/Combat"
import HomeScreen from "../Components/Screens/Home/Home"
import {InventoryScreen} from "../Components/Screens/Inventory/InventoryScreen"
import MarketScreen from "../Components/Screens/Market/Market"
import SettingsScreen from "../Components/Screens/Settings/Settings"
import SkillsScreen from "../Components/Screens/Skills/Skills"
import {WoodcuttingScreen} from "../Components/Screens/Skills/Woodcutting/WoodcuttingScreen"

export const GameRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeScreen />} />
			<Route path="/inventory" element={<InventoryScreen />} />
			<Route path="/market" element={<MarketScreen />} />
			<Route path="/combat" element={<CombatScreen />} />
			<Route path="/skills" element={<SkillsScreen />} />
			<Route path="/adventure" element={<AdventureScreen />} />
			<Route path="/achievements" element={<AchievementsScreen />} />
			<Route path="/settings" element={<SettingsScreen />} />
			<Route path="/woodcutting" element={<WoodcuttingScreen />} />
		</Routes>
	)
}
