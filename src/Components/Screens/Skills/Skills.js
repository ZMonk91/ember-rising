import React, { useEffect, useState } from "react"
import {Flex} from "@chakra-ui/react"
import {useSelector} from "react-redux"

import {SkillCard} from "./SkillCard"

export const SkillsScreen = () => {
	const skills = useSelector((state) => state.skills)
	const [load, setLoad] = useState(false)
	// Use Effect ensures component is mounted
	useEffect(() => {
		setLoad(true, [])
	},[])

	const populateCards = () => {
		return (
		Object.entries(skills).map((key,value) => {
			console.log(skills[key[0]])
			return <SkillCard skill={skills[key[0]]}/>
		}))
	}

	return (
		<Flex justify="space-evenly" height="100%" wrap="wrap">
			{load && populateCards()}
		</Flex>
	)
}

export default SkillsScreen
