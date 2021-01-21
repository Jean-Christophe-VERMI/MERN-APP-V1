import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  author: String,
  tags: [String],
  urlImg: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;