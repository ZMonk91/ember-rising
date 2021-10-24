import React, {Component} from "react"
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink,
	Nav,
	Row,
	Button,
	ButtonGroup,
	Col
} from "reactstrap"
import {VscThreeBars} from "react-icons/vsc"

class Header extends Component {
	constructor(props) {
		super(props)
		this.toggleNavbar = this.toggleNavbar.bind(this)

		this.state = {
			isCollapsed: false,
		}
	}

	toggleNavbar() {
		this.setState({
			isCollapsed: !this.state.isCollapsed
		})
	}



	render() {
		return (
			<Navbar className="Header" dark>
				<NavbarBrand href="/" className="mr-auto">
					Username
				</NavbarBrand>

				<Row>
					<Col>
						<Button>214124110G</Button>
					</Col>{" "}
					<Col>
						<Button>20/20</Button>
					</Col>{" "}
					<Col>
						<Button>30/32</Button>
					</Col>
				</Row>

				<VscThreeBars size="2em" className="mr-2" onClick={this.toggleNavbar} />
				<Collapse isOpen={this.state.isCollapsed} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="/components/">Components</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">
								GitHub
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}

export default Header
