import { Col, Row } from "react-bootstrap";
import SectionAndCard from "./SectionAndCard";

const Homepage = () => {
  return (
    <Col xs={12} md={9} className="offset-lg-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>

      <SectionAndCard id="rock" title="Rock Classics" sectionId="rockSection" artistName="queen" />
      <SectionAndCard id="pop" title="Pop Culture" sectionId="popSection" artistName="katyperry" />
      <SectionAndCard id="hiphop" title="HipHop" sectionId="hipHopSection" artistName="eminem" />
    </Col>
  );
};

export default Homepage;
