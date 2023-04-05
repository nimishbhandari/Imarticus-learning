import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CoursesCard = ({ id }) => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const getCourses = async () => {
      try {
        let res = await axios.get(`/api/course/${id}`);
        if (res.data) {
          setCourse({ ...res.data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, [id]);

  const navigate = useNavigate();
  return (
    <div className="courses_card">
      {course && (
        <Row>
          <Col md={3}>
            <Image
              src={course.img}
              alt="img"
              className="courses_card_img"
              fluid
              style={{ borderRadius: "5px" }}
            />
          </Col>
          <Col md={6} className="vcenter">
            <div className="card_header">{course.name}</div>
            <div className="card_green">{course.batch}</div>
            <div>
              <progress id="file" value={course.status} max="100"></progress>
              &nbsp; 0%
            </div>
          </Col>
          <Col md={3} className="center">
            <button
              className="card_btn"
              onClick={() => {
                navigate(`/course/${id}`);
              }}
            >
              Start Course
            </button>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CoursesCard;
