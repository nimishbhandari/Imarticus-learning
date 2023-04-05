import { Col, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CourseSubHeading from "../components/CourseSubHeading";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
  const { id } = useParams();
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
    <>
      {course && (
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
                    src={course.img}
                    className="courses_card_img"
                    fluid
                    style={{ borderRadius: "5px" }}
                  />
                </Col>
                <Col md={8} className="vcenter course_header">
                  <div className="card_header">{course.name}</div>
                  <div>
                    <span className="card_green">{course.batch}</span>
                  </div>
                  <div>
                    <progress
                      id="file"
                      value={course.status}
                      max="100"
                    ></progress>{" "}
                    &nbsp;
                    <span style={{ fontSize: "1rem" }}>{course.status}%</span>
                  </div>
                </Col>

                {course.topic &&
                  course.topic.length > 0 &&
                  course.topic.map((single) => {
                    return (
                      <CourseSubHeading
                        key={single._id}
                        lectures={single.lectures}
                        subName={single.subName}
                      />
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Course;
