import mongoose from "mongoose";
const projectsSchema = new mongoose.Schema({
  name: String,
  description: String,
  owner: String,
  stars: Number,
  forks: Number,
  languages: [String],
  tags: [String],
  contributors: [String],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Project", projectsSchema, "projects");
