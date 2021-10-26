import {mode} from "@chakra-ui/theme-tools"

export const globalStyles = {
	colors: {
		gray: {
			700: "#1f2733"
		}
	},
	styles: {
		global: (props) => ({
			// button: {
			// 	bg: "gray.700"
			// },
			body: {
				bg: "gray.800",
				fontFamily: "Helvetica, sans-serif"
			},
			html: {
				fontFamily: "Helvetica, sans-serif"
			}
		})
	}
}
