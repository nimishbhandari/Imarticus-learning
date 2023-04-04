import { Col, Row } from "react-bootstrap";
import CoursesCard from "../components/CoursesCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row className="dashboard_row">
        <Col md={8} className="dashboard_col">
          <div className="dashboard_heading">Individual Course</div>
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
          <CoursesCard />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
