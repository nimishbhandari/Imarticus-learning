import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CoursesCard = () => {
  const navigate = useNavigate();
  return (
    <div className="courses_card">
      <Row>
        <Col md={3}>
          <Image
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
            alt="img"
            className="courses_card_img"
            fluid
            style={{ borderRadius: "5px" }}
          />
        </Col>
        <Col md={6} className="vcenter">
          <div className="card_header">Introduction to Machine Learing</div>
          <div className="card_green">
            Batch: Default_Batch_1625571974257_Introduction
          </div>
          <div>
            <progress id="file" value="0" max="100"></progress> &nbsp; 0%
          </div>
        </Col>
        <Col md={3} className="center">
          <button
            className="card_btn"
            onClick={() => {
              navigate("/course");
            }}
          >
            Start Course
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CoursesCard;
