import { Col, Image } from "react-bootstrap";

const SingleCard = ({ ele }) => {
  return (
    <Col key={ele.id} className="text-center">
      <Image className="img-fluid" src={ele.album.cover_medium} alt="track" />
      <p>
        Track: {ele.title} <br />
        Artist: {ele.artist.name}
      </p>
    </Col>
  );
};

export default SingleCard;
