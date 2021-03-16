import express from  'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config/index.js';
import path from 'path';

//Routes
import postRoutes from './routes/posts.js';
import articleRoutes from './routes/articles.js';
import userRoutes from './routes/users.js';
import contactRoute from './routes/contact.js';

const app = express();
const { MONGO_URI, MONGO_DB_NAME } = config;

const corsOrigins = ['https://jcvdevpro.fr', 'https://jcvdevpro.fr/posts', 'https://jcvdevpro.fr/articles'];
const corsOptions = {
  origin: function (origin, callback) {
    // db.loadOrigins is an example call to load
    // a list of origins from a backing database
    corsOrigins.loadOrigins(function (error, origins) {
      callback(error, origins)
    })
  }
}

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use('/', contactRoute);

// DB Config
const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// Connect to Mongo
mongoose.connect(db, {
  useNewUrlParser: true, 
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((error) => console.log(error.message));

  // Use Routes
  app.use('/posts', postRoutes);
  app.use('/articles', articleRoutes);
  app.use('/user', userRoutes);

  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('./client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const { PORT } = config;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));