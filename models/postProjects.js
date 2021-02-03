import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  name: String,
  author: String,
  github: String,
  tags: [String],
  urlImg: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostProjects = mongoose.model('PostProjects', postSchema);

export default PostProjects;