const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseTitle: { type: String, required: true },
  courseDescription: { type: String, required: true },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }, // رابط المستخدم (الأستاذ)
      videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  
});
module.exports = mongoose.models.Course || mongoose.model("Course", courseSchema);