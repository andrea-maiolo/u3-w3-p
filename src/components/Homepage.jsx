import { Col, Row } from "react-bootstrap";
import SectionAndCard from "./SectionAndCard";

const Homepage = () => {
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
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
      {/* {[
        { id: "rock", title: "Rock Classics", sectionId: "rockSection" },
        { id: "pop", title: "Pop Culture", sectionId: "popSection" },
        { id: "hiphop", title: "HipHop", sectionId: "hipHopSection" },
      ].map(({ id, title, sectionId }) => (
        <Row key={id}>
          <Col xs={10}>
            <div id={id}>
              <h2>{title}</h2>
              <Row id={sectionId} className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" />
            </div>
          </Col>
        </Row>
      ))} */}
    </Col>
  );
};

export default Homepage;
