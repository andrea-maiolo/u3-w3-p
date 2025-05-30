import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const SectionAndCard = (props) => {
  console.log(props);
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
    fillMusicSection(props.artistName);
  }, []);

  return (
    <Row id={props.id}>
      <Col id={props.sectionId}>
        <h2>{props.title}</h2>
        <Row>
          {album &&
            album.slice(0, 4).map((ele) => {
              return (
                <Col key={ele.id}>
                  <Image className="img-fluid" src={ele.album.cover} alt="track" />
                  <p>Track: {ele.title}</p>
                  <p>Artist: {ele.artist.name}</p>
                </Col>
              );
            })}
        </Row>
      </Col>
    </Row>
  );
};

export default SectionAndCard;
