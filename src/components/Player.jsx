import { Col, Container, Image, Row } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import repeat from "../assets/playerbuttons/repeat.png";
import next from "../assets/playerbuttons/next.png";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => {
    return state.song.currentlyPlaying;
  });
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 justify-content-center align-items-center">
            {selectedSong && (
              <Col className="d-flex text-white">
                <Image src={selectedSong.album.cover_small} className="img-fluid ms-3" />
                <p className="ms-2">
                  Track: {selectedSong.title} <br />
                  Artist: {selectedSong.artist.name}
                </p>
              </Col>
            )}
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <Image src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={prev} alt="prev" />
                </a>
                <a href="#">
                  <Image src={play} alt="play" />
                </a>
                <a href="#">
                  <Image src={next} alt="next" />
                </a>
                <a href="#">
                  <Image src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
