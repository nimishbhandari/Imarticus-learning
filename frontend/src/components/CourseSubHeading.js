import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const CourseSubHeading = () => {
  const [open, setOpen] = useState(0);
  return (
    <>
      <Row
        className="mt-4 course_subpart p-2"
        onClick={() => {
          open ? setOpen(0) : setOpen(1);
        }}
      >
        <Col md={11}>
          <div className="course_sub">1. Introduction to Machine Learning</div>
          <div className="course_sub2"> 1 Lecture</div>
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
          <Row>
            <Col md={1}></Col>
            <Col md={11} className="course_sub3">
              1. Intoduction to ML
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11} className="course_sub3">
              1. Intoduction to ML
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11} className="course_sub3">
              1. Intoduction to ML
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11} className="course_sub3">
              1. Intoduction to ML
            </Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={11} className="course_sub3">
              1. Intoduction to ML
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CourseSubHeading;
