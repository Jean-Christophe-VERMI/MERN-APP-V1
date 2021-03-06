import express from 'express';

import { getArticles, getArticle, createArticle, deleteArticle } from '../controllers/articles.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getArticles);
router.get('/:id', getArticle);
router.post('/', auth, createArticle);
router.delete('/:id', auth, deleteArticle);


export default router;