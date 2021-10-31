import React from "react"
import {NavbarContainer} from "./NavbarContainer"
import {NavbarUsername} from "./NavbarUsername"
import {NavbarMenuButton} from "./NavbarMenuButton"
import {NavbarStatusButtons} from "./NavbarStatusButtons"
import {NavbarSkillsContainer} from "./NavbarSkillsContainer"


export const Navbar = (props) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const toggle = () => setIsOpen(!isOpen)



	return (
        <NavbarContainer {...props}>
				<NavbarUsername />
				<NavbarStatusButtons />
				<NavbarMenuButton toggle={toggle} />

				{isOpen && <NavbarSkillsContainer />}
			</NavbarContainer>
	)
}
