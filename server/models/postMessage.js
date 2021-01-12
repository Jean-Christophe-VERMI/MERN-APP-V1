import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  tags: [String],
  urlImg: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;