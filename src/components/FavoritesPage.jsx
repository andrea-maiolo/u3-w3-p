import { Button, Col, Container, Row } from "react-bootstrap";
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
              <h1>Here are your saved jobs</h1>
              {favList.map((ele, i) => (
                <Row key={i} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                  <Col xs={3}>
                    <p>{ele.title}</p>
                  </Col>
                  <Col xs={9}>
                    <Button
                      className="ms-3 btn-danger"
                      onClick={() => {
                        dispatch(deleteFromListAction(i));
                      }}
                    >
                      Delete
                    </Button>
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
