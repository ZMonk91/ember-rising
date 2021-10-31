import {extendTheme} from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
	activeLink: {
		backgroundColor: "teal"
	},
	colors: {
		text: {
			active: "#FFFFFF",
			subtle: "#A0AEC0",
			inactive: "#4A5568"
		},
		bg: {
			dark: "#171923",
			base: "#1A202C"
		},
		fonts: {
			heading: "Open Sans",
			body: "Raleway"
		}
	}
}
// 3. extend the theme
const theme = extendTheme({config})
export default theme
