import {createSlice} from "@reduxjs/toolkit"
import {
	GiWoodAxe,
	GiFishingHook,
	// GiMining,
	// GiGlassHeart,
	// GiSwordBrandish,
	// GiMuscleUp,
	// GiShield,
	// GiRake,
	// GiAnvil,
	// GiHammerNails,
	// GiBowArrow,
	// GiTreasureMap,
	// GiTriorb,
	// GiBrokenTablet,
	// GiCampCookingPot,
	// GiClover
} from "react-icons/gi"

export const skillsSlice = createSlice({
	name: "skills",
	initialState: {
		woodcutting: {
			title: "Woodcutting",
			icon: GiWoodAxe,
			xp: 0,
			nextLevel: 100,
			xpNeededThisLevel: 100,
			xpGainedThisLevel: 0,
			level: 1,
			link: "/woodcutting"
		},
		fishing: {
			title: "Fishing",
			icon: GiFishingHook,
			xp: 0,
			nextLevel: 100,
			xpNeededThisLevel: 100,
			xpGainedThisLevel: 0,
			level: 1,
			link: "/fishing"
		}
	},
	reducers: {
		getSkilllevel: (state, action) => {
			return state[action.payload.skill].level
		},
		addXp: (state, action) => {
			state[action.payload.skill].xp += action.payload.value
			state[action.payload.skill].xpGainedThisLevel += action.payload.value
		},
		addLevel: (state, action) => {
			state[action.payload.skill].level++
		},
		updateNextLevel: (state, action) => {
			state[action.payload.skill].nextLevel += Math.floor(
				state[action.payload.skill].nextLevel * 1.09
			)
			state[action.payload.skill].xpNeededThisLevel =
				state[action.payload.skill].nextLevel
			state[action.payload.skill].xpGainedThisLevel = 0
		}
	}
})

export const {addXp, addLevel, updateNextLevel, getSkillLevel} =
	skillsSlice.actions
export default skillsSlice.reducer
