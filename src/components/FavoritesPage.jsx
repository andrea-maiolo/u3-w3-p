import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromListAction } from "../redux/actions";

const FavoritesPage = () => {
  const favList = useSelector((state) => state.favorite.content);
  const dispatch = useDispatch();

  return (
    <>
      <Sidebar />

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
        <Row>
          {favList.length > 0 ? (
            <Container fluid>
              <h1 className="text-white">Here are your saved songs</h1>
              {favList.map((ele, i) => (
                <Row key={i} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                  <Col className="d-flex align-items-center justify-content-between">
                    <p>{ele.title}</p>
                    <Image className="img-fluid custom-fav-img ms-3" src={ele.album.cover_small} alt="album cover" />
                    <div className="d-flex align-items-center">
                      <Button
                        size="sm"
                        className="ms-3 btn-danger"
                        onClick={() => {
                          dispatch(deleteFromListAction(i));
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </Col>
                </Row>
              ))}
            </Container>
          ) : (
            <Container fluid className="mt-4">
              <h1 className="text-white">Add favorites song to see them here</h1>
            </Container>
          )}
        </Row>
      </Col>
    </>
  );
};

export default FavoritesPage;
