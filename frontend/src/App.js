import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dasboard";
import Explore from "./pages/Explore";
import Groups from "./pages/Groups";
import Course from "./pages/Course";

const App = () => {
  return (
    <Router>
      <main>
        <Row>
          <Col className="pe-0" md={2}>
            <Sidebar />
          </Col>
          <Col className="p-0 content" md={10}>
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/course" element={<Course />} />
            </Routes>
          </Col>
        </Row>
      </main>
    </Router>
  );
};

export default App;
