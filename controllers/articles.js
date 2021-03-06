import express from 'express';
import mongoose from 'mongoose';

import Article from '../models/articles.js';

const router = express.Router();

export const getArticles = async (req, res) => {
  try {
    const articleProjects = await Article.find();
    res.status(200).json(articleProjects);

  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const getArticle = async (req, res) => { 
  const { id } = req.params;

  try {
      const article = await Article.findById(id);
      
      res.status(200).json(article);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createArticle = async (req, res) => {
  const articleUrl = req.body;

  console.log(articleUrl);
  return;
  // 1) Faire une requette pour aller scrapper l'url et annalyser le document afin de récupérer les métaDatas souhaités.
  // 2) Vérifier les métasDatas récupéré
  // 3) Créer un nouvel article sur Mongo 
  const newArticle = new Article({ ...article, author: req.userId, createdAt: new Date().toISOString() })

  try {
      await newArticle.save();

      res.status(201).json(newArticle );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const deleteArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No article with id: ${id}`);

  await Article.findByIdAndRemove(id);

  res.json({ message: "Article deleted successfully." });
}


export default router;