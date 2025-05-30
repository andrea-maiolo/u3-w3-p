import { Button, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSongSelected, setToFavAction } from "../redux/actions";
import { useState } from "react";

const SingleCard = ({ ele }) => {
  const dispatch = useDispatch();

  const handleClickSong = (currentAlbum) => {
    dispatch(setSongSelected(currentAlbum));
  };

  const [icon, setIcon] = useState(false);

  const currentFavList = useSelector((state) => {
    return state.favorite.content;
  });

  const checkPayload = (payload) => {
    if (currentFavList.some((ele) => ele.id === payload.id)) {
      return;
    } else {
      dispatch(setToFavAction(payload));
    }
  };

  const chageIcon = (curretnEle) => {
    // check state global
    // if (!currentFavList.some((ele) => ele.id === curretnEle.id)) {
    setIcon(!icon);
    // } else {
    //   return;
    // }
  };

  return (
    <Col className="text-center">
      <Image
        className="img-fluid"
        src={ele.album.cover_medium}
        alt="track"
        onClick={() => {
          handleClickSong(ele);
        }}
      />
      <div className="d-flex">
        <p>
          Track: {ele.title} <br />
          Artist: {ele.artist.name}
        </p>
        <Button
          size="sm"
          variant="outline-primary"
          className="custom-btn"
          onClick={() => {
            checkPayload(ele), chageIcon(ele);
          }}
        >
          {icon ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
        </Button>
      </div>
    </Col>
  );
};

export default SingleCard;
