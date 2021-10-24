import React, {Component} from "react"
import {Col, Nav, NavItem, Row} from "reactstrap"
import {NavLink} from "react-router-dom"

import {AiOutlineArrowLeft} from "react-icons/ai"
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
		this.toggleSidebar = this.toggleSidebar.bind(this)
		this.handleSidebarClass = this.handleSidebarClass.bind(this)
		this.handleSidebarLinks = this.handleSidebarLinks.bind(this)
		this.handleSidebarButtonClass = this.handleSidebarButtonClass.bind(this)

		this.state = {
			isSidebarCollapsed: false
		}
	}

	handleSidebarLinks(num) {
		const links = [
			"Home",
			"Inventory",
			"Market",
			"Combat",
			"Skills",
			"Adventure",
			"Achievements",
			"Settings"
		]
		if (!this.state.isSidebarCollapsed) {
			return links[num]
		} else {
			return
		}
	}

	toggleSidebar() {
		this.setState({
			isSidebarCollapsed: !this.state.isSidebarCollapsed
		})
	}

	handleSidebarClass = () =>
		this.state.isSidebarCollapsed ? "Sidebar--collapsed" : "Sidebar--expanded"

	handleSidebarButtonClass = () =>
		this.state.isSidebarCollapsed
			? "Sidebar--button-left"
			: "Sidebar--button-right"

	render() {
		return (
			<div className={this.handleSidebarClass() + " Sidebar"}>
				<Nav vertical color="faded" dark>
					<i className={"Sidebar--button " + this.handleSidebarButtonClass()}>
						<AiOutlineArrowLeft onClick={this.toggleSidebar} />
					</i>
					<NavLink exact to="/">
						<NavItem>
							<GiHouse /> {this.handleSidebarLinks(0)}
						</NavItem>
					</NavLink>

					<NavLink exact to="/inventory">
						<NavItem>
							<GiBackpack /> {this.handleSidebarLinks(1)}
						</NavItem>
					</NavLink>
					<NavLink to="/market">
						<NavItem>
							<GiScales /> {this.handleSidebarLinks(2)}
						</NavItem>
					</NavLink>
					<NavLink to="/combat">
						<NavItem>
							<RiSwordLine /> {this.handleSidebarLinks(3)}
						</NavItem>
					</NavLink>
					<NavLink to="/skills">
						<NavItem>
							<GiProgression /> {this.handleSidebarLinks(4)}
						</NavItem>
					</NavLink>
					<NavLink to="/adventure">
						<NavItem>
							<GiTreasureMap /> {this.handleSidebarLinks(5)}
						</NavItem>
					</NavLink>
					<NavLink to="/achievements">
						<NavItem>
							<GiTrophy /> {this.handleSidebarLinks(6)}
						</NavItem>
					</NavLink>
					<NavLink to="/settings">
						<NavItem>
							<GiCog /> {this.handleSidebarLinks(7)}
						</NavItem>
					</NavLink>
				</Nav>
			</div>
		)
	}
}

export default Sidebar
