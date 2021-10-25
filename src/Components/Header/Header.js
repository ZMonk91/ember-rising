import React, {Component, useState} from "react"
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
import {useSelector} from "react-redux"

export function Header() {
	const username = useSelector(state => state.user.username)

	const gold = useSelector(state => state.user.gold)
	const currHp = useSelector((state) => state.user.currHp)
	const maxHp = useSelector((state) => state.user.maxHp)
	const currMp = useSelector((state) => state.user.currMp)
	const maxMp = useSelector((state) => state.user.maxMp)

	const [collapsed, setCollapsed] = useState(false)

	const toggleNavbar = () => {
		setCollapsed(!collapsed)
	}

	return (
		<Navbar className="Header" dark>
			<NavbarBrand href="/" className="mr-auto">
				{username}
			</NavbarBrand>
			<Row>
				<Col>
					<Button>{gold}G</Button>
				</Col>{" "}
				<Col>
					<Button>{currHp}/{maxHp}Hp</Button>
				</Col>{" "}
				<Col>
					<Button>{currMp}/{maxMp}Mp</Button>
				</Col>
			</Row>
			<VscThreeBars size="2em" className="mr-2" onClick={toggleNavbar}/>
			<Collapse isOpen={collapsed} navbar>
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

export default Header
