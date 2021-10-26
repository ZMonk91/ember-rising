import {createSlice} from "@reduxjs/toolkit"


export const skillsSlice = createSlice({
	name: "skills",
	initialState: {
		woodcutting: {
			xp: 0,
			nextLevel: 100,
            level: 1
		}
	},
	reducers: {
		addXp: (state, action) => {
			state[action.payload.skill].xp += action.payload.value
		},
        addLevel: (state, action) => {
            state[action.payload.skill].level ++
        },
        updateNextLevel: (state, action) => {
            state[action.payload.skill].nextLevel += Math.floor(
							state[action.payload.skill].nextLevel * 1.09
						)}
            }
	}
)


export const {addXp, addLevel, updateNextLevel} = skillsSlice.actions
export default skillsSlice.reducer
