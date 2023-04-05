import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  return (
    <div className="video ">
      <Row>
        <Col md={3} className="center pt-5">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="card_btn"
          >
            Go Back
          </button>
        </Col>
      </Row>
      <Row className="dashboard_row">
        <h3 className="center">
          This page is common for all and contains a sample video
        </h3>
      </Row>
      <Row>
        <div className="center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lfxoKcCkEZU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Row>
    </div>
  );
};

export default Video;
