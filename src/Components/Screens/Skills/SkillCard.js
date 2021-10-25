import React from "react"
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Progress } from "reactstrap"
import { Link } from "react-router-dom"

export function SkillCard(props) {
    props = props.props

	const linkHandler = (link = null) =>{
		if (link) {return link} else {return '/'}
	}

	return (
		<Card className="SkillCard">
		<Link to={linkHandler(props.link)}>
			<span className="SkillCard--icon">
				{props.icon()}
			</span>
			<CardTitle className="SkillCard--title" tag="h5">
				{props.title}
			</CardTitle>
			<CardSubtitle tag="h6" className="mb-2 text-muted">
				Level {props.level}
			</CardSubtitle>
			<CardBody className="SkillCard--body">
				<CardText className="SkillCard--text">
					<Progress multi>
						<div className="SkillCard--progress-text">{props.xp}/{props.nextLevelXp}</div>
						<Progress bar animated color="success" value="5"></Progress>
					</Progress>
				</CardText>
			</CardBody>
			</Link>
		</Card>
	)
}
