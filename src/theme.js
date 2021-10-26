import { extendTheme } from "@chakra-ui/react"
import {CardComponent} from "./Theme/Additions/Card/CardComponent"
import {CardBodyComponent} from "./Theme/Additions/Card/CardBodyComponent"
import {CardHeaderComponent} from "./Theme/Additions/Card/CardHeaderComponent"

// 2. Add your color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
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
const theme = extendTheme({ config, CardBodyComponent, CardComponent, CardHeaderComponent })
export default theme