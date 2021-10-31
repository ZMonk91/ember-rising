import {Flex} from '@chakra-ui/react'
export const NavbarContainer = ({children, ...props}) => {
	return (

			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				w="100%"
				mb={1}
				px={4}
				py={2}
				borderBottom="1px"
				// p={8}
				bg={["primary.500", "primary.500", "transparent", "transparent"]}
				color={["white", "white", "primary.700", "primary.700"]}
				{...props}
			>
				{children}
			</Flex>
	)
}