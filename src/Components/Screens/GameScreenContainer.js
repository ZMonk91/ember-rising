import React from "react";
import { GameRoutes } from "../../app/routes";
import {Container} from '@chakra-ui/react'

export const GameScreenContainer = () => {
    return (
			<Container maxW="100%" height='100%'>
				<GameRoutes />
			</Container>
		)
}