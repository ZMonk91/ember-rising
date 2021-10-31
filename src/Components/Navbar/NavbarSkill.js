import React from "react"
import {Box} from "@chakra-ui/layout"
import {useSelector} from "react-redux"
import {Tooltip} from "@chakra-ui/tooltip"
import {Table, Tbody, Td, Thead, Tr} from "@chakra-ui/table"
import {NavbarSkillProgress} from "./NavbarSkillProgress"

export const NavbarSkill = (props) => {
	// const dispatch = useDispatch();
	const skills = useSelector((state) => state.skills)
	const skill = skills[props.skill]

	const getTooltipInfo = () => {
		return (
			<Table size="sm" variant="unstyled">
				<Thead
					color="text-primary"
					fontWeight="semibold"
					textAlign="center"
				>
					{skill.title}
				</Thead>
				<Tbody>
					<Tr>
						<Td>Current Xp:</Td>
						<Td isNumeric>{skill.xp}</Td>
					</Tr>
					<Tr>
						<Td>Required Xp:</Td>
						<Td isNumeric>{skill.nextLevel}</Td>
					</Tr>
					<Tr>
						<Td>Remaining:</Td>
						<Td isNumeric>{skill.nextLevel - skill.xp}</Td>
					</Tr>
				</Tbody>
			</Table>
		)
	}

	return (
		<Box>
			{/* Thanks Olaf for the snippet */}
			{props.skill && (
				<Tooltip
					hasArrow
					label={getTooltipInfo()}
					aria-label="A tooltip"
					bg="Background"
					color="text-primary"
					border="1px solid"
					shadow="1px 1px"
					arrowShadowColor="red"
					p={0}
				>
					{/* Must wrap children in a Span element for Tooltip to work properly*/}
					<span>
						<NavbarSkillProgress skill={skill} />
					</span>
				</Tooltip>
			)}
		</Box>
	)
}
