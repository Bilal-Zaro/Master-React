const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // عنوان الفيديو
    description: { type: String }, // وصف الفيديو
    videoUrl: { type: String, required: true }, // رابط الفيديو
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    }, // الدورة المرتبط بها الفيديو
    uploadedAt: { type: Date, default: Date.now }, // وقت رفع الفيديو
  },
  { timestamps: true }
);

module.exports = mongoose.models.Video || mongoose.model("Video", videoSchema);
