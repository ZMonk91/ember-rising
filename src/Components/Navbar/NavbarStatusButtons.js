import React from "react"
import {HStack, Button} from '@chakra-ui/react'
import { useSelector } from "react-redux"

export const NavbarStatusButtons = () => {
		const gold = useSelector((state) => state.user.gold)
		const currHp = useSelector((state) => state.user.currHp)
		const maxHp = useSelector((state) => state.user.maxHp)
		const currMp = useSelector((state) => state.user.currMp)
		const maxMp = useSelector((state) => state.user.maxMp)
    return (
			<HStack spacing="1rem">
				<Button>{gold} G</Button>
				<Button>{currHp}/{maxHp} HP</Button>
				<Button>{currMp}/{maxMp} MP</Button>
			</HStack>
		)
}
