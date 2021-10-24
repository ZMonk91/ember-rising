
import { MemoryRouter as Router } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import ScreenContainer from './Components/Screens/ScreenContainer'
import ChatContainer from './Components/Chat/ChatContainer';

function App() {
  return (
		<Router>
			<Container fluid>
				<Row>
					<Header/>
				</Row>
				<Row>
						<Sidebar/>
					<Col className="pl-0">
						<ScreenContainer />
						<ChatContainer />
					</Col>
				</Row>
			</Container>
		</Router>
	)
}

export default App;
