import React from "react"
import {Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {SkillCardHeader} from "./SkillCardHeader"
import {SkillCardBody} from "./SkillCardBody"
import {SkillCardProgress} from "./SkillCardProgress"

export function SkillCard(props) {
	const skill = props.skill
	const linkHandler = (link = null) => {
		if (link) {
			return link
		} else {
			return "/"
		}
	}

	return (
		<Box
			rounded={{
				md: "lg"
			}}
			shadow="base"
			overflow="hidden"
			maxW="10rem"
			maxH="10rem"
			m={1}
			bg="#2c323d"
		>
			<Link to={linkHandler(skill.link)}>
				<SkillCardHeader icon={skill.icon} title={skill.title} />
				<SkillCardBody skill={skill} />
				<SkillCardProgress skill={skill} />
			</Link>
		</Box>
	)
}
