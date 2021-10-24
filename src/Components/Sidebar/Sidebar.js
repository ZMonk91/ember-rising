import React, {Component} from "react"
import {Nav, NavItem} from "reactstrap"
import {Link, NavLink} from "react-router-dom"
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
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Sidebar">
				<Nav vertical color="faded" dark>
					<NavItem>
						<NavLink activeClassName="active" to="/">
							<GiHouse /> Home
						</NavLink>
					</NavItem>
					<NavItem>
						{/* <Link to="/inventory"> */}
						<NavLink activeClassName="active" to="/inventory">
							<GiBackpack /> Inventory
						</NavLink>
						{/* </Link> */}
					</NavItem>
					{/* <NavItem>
						<NavLink>
							<GiScales /> Market
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<RiSwordLine /> Combat
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<GiProgression /> Skills
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<GiTreasureMap /> Adventure
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<GiTrophy /> Achievements
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>
							<GiCog /> Settings
						</NavLink>
					</NavItem> */}
				</Nav>
			</div>
		)
	}
}

export default Sidebar
