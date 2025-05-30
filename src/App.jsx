import { Container, Row } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Homepage />
          <Player />
        </Row>
      </Container>
    </>
  );
}

export default App;
