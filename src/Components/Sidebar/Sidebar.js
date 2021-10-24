import React, {Component} from "react"
import {Nav, NavItem} from "reactstrap"
import {NavLink} from "react-router-dom"
import {
	GiHouse,
	GiBackpack,
	GiScales,
	GiTreasureMap,
	GiTrophy,
	GiCog
} from "react-icons/gi"
import {RiSwordLine} from "react-icons/ri"
import {GiProgression} from "react-icons/gi"
class Sidebar extends Component {
	render() {
		return (
			<div className="Sidebar">
				<Nav vertical color="faded" dark>
					<NavLink exact to="/">
						<NavItem>
							<GiHouse /> Home
						</NavItem>
					</NavLink>
					<NavLink exact to="/inventory">
						<NavItem>
							<GiBackpack /> Inventory
						</NavItem>
					</NavLink>
					<NavLink to="/market">
						<NavItem>
							<GiScales /> Market
						</NavItem>
					</NavLink>
					<NavLink to="/combat">
						<NavItem>
							<RiSwordLine /> Combat
						</NavItem>
					</NavLink>
					<NavLink to="/skills">
						<NavItem>
							<GiProgression /> Skills
						</NavItem>
					</NavLink>
					<NavLink to="/adventure">
						<NavItem>
							<GiTreasureMap /> Adventure
						</NavItem>
					</NavLink>
					<NavLink to="/achievements">
						<NavItem>
							<GiTrophy /> Achievements
						</NavItem>
					</NavLink>
					<NavLink to="/settings">
						<NavItem>
							<GiCog /> Settings
						</NavItem>
					</NavLink>
				</Nav>
			</div>
		)
	}
}

export default Sidebar
