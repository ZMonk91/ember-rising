import {Flex} from "@chakra-ui/react"
export const NavbarContainer = ({children, ...props}) => {
	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			w="100%"
			mb={0}
			px={4}
			py={2}
			borderBottom="1px"
			bg={["primary.500", "primary.500", "transparent", "transparent"]}
			color={["white", "white", "primary.700", "primary.700"]}
			{...props}
		>
			{children}
		</Flex>
	)
}
