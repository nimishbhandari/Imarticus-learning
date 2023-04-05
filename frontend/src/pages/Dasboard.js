import { Col, Row } from "react-bootstrap";
import CoursesCard from "../components/CoursesCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [course, setCourse] = useState([]);
  const getCourses = async () => {
    try {
      let res = await axios.get("/api/course");
      if (res.data.length) {
        setCourse([...res.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div className="dashboard">
      <Row className="dashboard_row">
        <Col md={8} className="dashboard_col">
          <div className="dashboard_heading">Individual Course</div>
          {course.length > 0 && (
            <>
              {course.map((single) => {
                return <CoursesCard key={single._id} id={single._id} />;
              })}
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
