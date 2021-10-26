import React, {Component} from "react"
import {Route, Routes} from "react-router"
import AchievementsScreen from "./Achievements/Achievements"
import AdventureScreen from "./Adventure/Adventure"
import CombatScreen from "./Combat/Combat"
import HomeScreen from "./Home/Home"
import InventoryScreen from "./Inventory/Inventory"
import MarketScreen from "./Market/Market"
import SettingsScreen from "./Settings/Settings"
import SkillsScreen from "./Skills/Skills"
import {WoodcuttingScreen} from "./Skills/Woodcutting/WoodcuttingScreen"

class ScreenContainer extends Component {
	render() {
		return (
			<div className="ScreenContainer">
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
			</div>
		)
	}
}

export default ScreenContainer
