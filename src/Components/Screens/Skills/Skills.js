import React from "react"
import {
	Container
} from "reactstrap"

import {SkillCard} from "./SkillCard"
import {CARDLIST} from "./SkillCardList"

export function SkillsScreen() {
	const skillList = CARDLIST

	const populateCards = (obj) => {
		obj.map((skill) => {
            console.log(skill)
			return <SkillCard props={skill}></SkillCard>
		})
	}

	return (
		<Container className="justify-content-between">
			<h4>Skills</h4>
			{/* TODO: Cant get this to work for some reason */}
			{populateCards(skillList)}
			{/* <CardDeck className="SkillCard--deck"> */}
			<SkillCard props={skillList[0]} />
			<SkillCard props={skillList[1]} />
			<SkillCard props={skillList[2]} />
			<SkillCard props={skillList[3]} />
			<SkillCard props={skillList[4]} />
			<SkillCard props={skillList[5]} />
			<SkillCard props={skillList[6]} />
			<SkillCard props={skillList[7]} />
			<SkillCard props={skillList[8]} />
			<SkillCard props={skillList[9]} />
			<SkillCard props={skillList[10]} />
			<SkillCard props={skillList[11]} />
			<SkillCard props={skillList[12]} />
			<SkillCard props={skillList[13]} />
			<SkillCard props={skillList[14]} />
			<SkillCard props={skillList[15]} />
			{/* </CardDeck> */}
		</Container>
	)
}

export default SkillsScreen
