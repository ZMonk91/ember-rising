import React from "react"
import {Progress} from "@chakra-ui/react"

export const SkillCardProgress = (props) => {
	const skill = props.skill
	return (
		<Progress
			value={(skill.xpGainedThisLevel / skill.xpNeededThisLevel) * 100}
		/>
	)
}
