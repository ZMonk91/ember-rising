import {extendTheme} from "@chakra-ui/react"
import {globalStyles} from "./customStyles"
// import {font} from "./foundations/Fonts"
// import { breakpoints } from "./Foundation/Breakpoints"
// import {buttonStyles} from "./components/button"
// import {badgeStyles} from "./components/badge"
// import {linkStyles} from "./components/link"
// import {drawerStyles} from "./components/drawer"
import {CardComponent} from "./Additions/Card/CardComponent"
import {CardBodyComponent} from "./Additions/Card/CardBodyComponent"
import {CardHeaderComponent} from "./Additions/Card/CardHeaderComponent"
// import {MainPanelComponent} from "./additions/layout/MainPanel"
// import {PanelContentComponent} from "./additions/layout/PanelContent"
// import {PanelContainerComponent} from "./additions/layout/PanelContainer"
import { mode } from "@chakra-ui/theme-tools";
export default extendTheme(
	// breakpoints, // Breakpoints
	globalStyles,
	// font, // Global styles
	// buttonStyles, // Button styles
	// badgeStyles, // Badge styles
	// linkStyles, // Link styles
	// drawerStyles, // Sidebar variant for Chakra's drawer
	CardComponent, // Card component
	CardBodyComponent, // Card Body component
	CardHeaderComponent, // Card Header component
	// MainPanelComponent, // Main Panel component
	// PanelContentComponent, // Panel Content component
	// PanelContainerComponent // Panel Container component
)
