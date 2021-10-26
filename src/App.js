import * as React from 'react'
import {ChakraProvider} from "@chakra-ui/react"

import { MemoryRouter as Router } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';

import theme from './theme'
import { Layout } from './Components/Screens/Layout';

function App() {
  return (
		<ChakraProvider theme={theme}>
			<Router>
				<Navbar />
				<Layout />
			</Router>
		</ChakraProvider>
	)
}

export default App;
