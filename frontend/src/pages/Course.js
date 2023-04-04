import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CourseSubHeading from "../components/CourseSubHeading";

const Course = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <Row className="dashboard_row">
        <Col md={10} className="dashboard_col">
          <Row>
            <Col md={3}>
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="card_btn"
              >
                Go Back
              </button>
            </Col>
          </Row>

          <Row className="course_main mt-4 p-3">
            <Col md={4}>
              <Image
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
                alt="img"
                className="courses_card_img"
                fluid
                style={{ borderRadius: "5px" }}
              />
            </Col>
            <Col md={8} className="vcenter course_header">
              <div className="card_header">Introduction to Machine Learing</div>
              <div>
                <span className="card_green">
                  Batch: Default_Batch_1625571974257_Introduction
                </span>
              </div>
              <div>
                <progress id="file" value="0" max="100"></progress> &nbsp;
                <span style={{ fontSize: "1rem" }}>0%</span>
              </div>
            </Col>
            <CourseSubHeading />
            <CourseSubHeading />
            <CourseSubHeading />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Course;
