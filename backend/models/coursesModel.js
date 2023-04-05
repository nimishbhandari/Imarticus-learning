import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  topic: [
    {
      subName: {
        type: String,
        required: true,
      },
      lectures: [
        {
          lectureName: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
