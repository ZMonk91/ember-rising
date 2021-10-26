import React from "react"
import { NavbarContainer } from "./NavbarContainer"
import {NavbarUsername} from './NavbarUsername'
import {NavbarMenuButton} from './NavbarMenuButton'
import { NavbarStatusButtons } from "./NavbarStatusButtons"
export const Navbar = (props) => {
      const [isOpen, setIsOpen] = React.useState(false)

			const toggle = () => setIsOpen(!isOpen)

            return(
                <NavbarContainer {...props}>
                    <NavbarUsername></NavbarUsername>
                    <NavbarStatusButtons/>
                    <NavbarMenuButton toggle={toggle}/>
                </NavbarContainer>
            )
}