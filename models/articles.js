import mongoose from 'mongoose';

const articleSchema = mongoose.Schema({
  title: String,
  url: String,
  youtubeUrl: String,
  tags: [String],
  resume: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;