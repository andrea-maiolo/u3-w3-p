import { Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Player from "./Player";
import SidebarSmall from "./SidebarSmall";

const MainComponentHome = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Sidebar />
        <SidebarSmall />
        <Homepage />
        <Player />
      </Row>
    </Container>
  );
};

export default MainComponentHome;
