import {
	GiHouse,
	GiBackpack,
	GiScales,
	GiTreasureMap,
	GiTrophy,
	GiCog
} from "react-icons/gi"
import {RiSwordLine} from "react-icons/ri"
import {GiProgression} from "react-icons/gi"

export const SIDEBARITEMS = [
	{name: "Home", location: "/", icon: GiHouse},
	{name: "Inventory", location: "/inventory", icon: GiBackpack},
	{name: "Market", location: "/market", icon: GiScales},
	{name: "Combat", location: "/combat", icon: RiSwordLine},
	{name: "Skills", location: "/skills", icon: GiProgression},
	{name: "Adventure", location: "/adventure", icon: GiTreasureMap},
	{name: "Trophies", location: "/achievements", icon: GiTrophy},
	{name: "Settings", location: "/settings", icon: GiCog}
]
