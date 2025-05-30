import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsAction } from "../redux/actions";

const SectionAndCard = ({ id, title, sectionId, artistName }) => {
  // const [album, setAlbum] = useState([]);
  const forCorrectArray = id.toUpperCase();

  const dispatch = useDispatch();

  const album = useSelector((state) => {
    return state.album[id];
  });

  const fillMusicSection = async (artistName) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setAlbum(data.data);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    // fillMusicSection(artistName);
    dispatch(getAlbumsAction("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, forCorrectArray));
  }, []);

  console.log(album);

  return (
    <Row>
      <Col xs={10} id={sectionId}>
        <Row id={id}>
          <h2>{title}</h2>
          <Row className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4}>
            {album &&
              album.slice(0, 4).map((ele) => {
                return <SingleCard key={ele.id} ele={ele} />;
              })}
          </Row>
        </Row>
      </Col>
    </Row>
  );
};

export default SectionAndCard;
