import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Player from "./Player";

const MainComponentHome = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Homepage />
        <Player />
      </Row>
    </Container>
  );
};

export default MainComponentHome;
