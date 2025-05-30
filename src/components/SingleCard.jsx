import { Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSongSelected } from "../redux/actions";

const SingleCard = ({ ele }) => {
  const dispatch = useDispatch();

  const handleClick = (currentAlbum) => {
    dispatch(setSongSelected(currentAlbum));
  };

  return (
    <Col key={ele.id} className="text-center">
      <Image
        className="img-fluid"
        src={ele.album.cover_medium}
        alt="track"
        onClick={() => {
          handleClick(ele);
        }}
      />
      <p>
        Track: {ele.title} <br />
        Artist: {ele.artist.name}
      </p>
    </Col>
  );
};

export default SingleCard;
