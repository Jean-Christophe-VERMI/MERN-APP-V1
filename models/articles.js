import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  title: String,
  url: String,
  tags: [String],
  urlImg: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;