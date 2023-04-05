import Course from "../models/coursesModel.js";

//@desc     Create new course
//@routes   POST /api/course
//@access   Public

const addCourse = async (req, res) => {
  const { name, img, batch, status, topic } = req.body;

  const course = new Course({ name, img, batch, status, topic });

  const createCourse = await course.save();

  res.status(201).json(createCourse);
};

//@desc     Get all courses
//@routes   GET /api/course
//@access   Public
const getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
};

//@desc     Get course by id
//@routes   GET /api/course/:id
//@access   Public
const getCourseById = async (req, res) => {
  const courses = await Course.findById(req.params.id);
  res.json(courses);
};

export { addCourse, getCourses, getCourseById };
