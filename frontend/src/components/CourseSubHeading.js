import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CourseSubHeading = ({ lectures, subName }) => {
  const [open, setOpen] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <Row
        className="mt-4 course_subpart p-2"
        onClick={() => {
          open ? setOpen(0) : setOpen(1);
        }}
      >
        <Col md={11}>
          <div className="course_sub">{subName}</div>
          <div className="course_sub2"> {lectures.length} Lecture</div>
        </Col>
        <Col md={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            version="1.1"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
          >
            <path fill="none" d="M0 0H50V50H0z"></path>
            <path
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M9 25L41 25"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M25 9L25 41"
            ></path>
          </svg>
        </Col>
      </Row>
      {open === 1 ? (
        <>
          {lectures.length > 0 &&
            lectures.map((single) => {
              return (
                <Row
                  onClick={() => {
                    navigate("/video");
                  }}
                >
                  <Col md={1}></Col>
                  <Col md={11} className="course_sub3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#000"
                      version="1.1"
                      viewBox="0 0 60 60"
                      xmlSpace="preserve"
                    >
                      <path d="M45.563 29.174l-22-15A1 1 0 0022 15v30a.999.999 0 001.563.826l22-15a1 1 0 000-1.652zM24 43.107V16.893L43.225 30 24 43.107z"></path>
                      <path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"></path>
                    </svg>
                    &nbsp;
                    {single.lectureName}
                  </Col>
                </Row>
              );
            })}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseSubHeading;
