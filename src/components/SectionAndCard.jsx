import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import SingleCard from "./SingleCard";

const SectionAndCard = ({ id, title, sectionId, artistName }) => {
  const [album, setAlbum] = useState([]);

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
    fillMusicSection(artistName);
  }, []);

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
