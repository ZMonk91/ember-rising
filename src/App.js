

import { Col, Container, Row } from 'reactstrap';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import ScreenContainer from './Components/Screens/ScreenContainer'
import ChatContainer from './Components/Chat/ChatContainer';

function App() {
  return (
    <Container fluid>
      <Row>
        <Header/>
      </Row>
      <Row>
        <Col sm={2} className="Sidebar--col">
          <Sidebar/>
        </Col>
        <Col>
          <ScreenContainer/>
          <ChatContainer/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
