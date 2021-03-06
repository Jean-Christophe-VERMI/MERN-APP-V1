import express from 'express';
import mongoose from 'mongoose';
import cheerio from 'cheerio';
import request from 'request';


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
  const article = req.body;
  const url = article.url;
  const tags = article.tags;
  console.log(url);
  console.log(tags);
  
  request(url, async (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(body);

      let titleScrap = $('h1').text();
      console.log(titleScrap);
      console.log('Scraping Done...');

      const newArticle = new Article({ ...article, title: titleScrap, url: url, tags: tags, createdAt: new Date().toISOString() });

      try {
        await newArticle.save();
  
        res.status(201).json(newArticle );
      } catch (error) {
          res.status(409).json({ message: error.message });
      }
    }
  });
 
  

  
}

export const deleteArticle = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No article with id: ${id}`);

  await Article.findByIdAndRemove(id);

  res.json({ message: "Article deleted successfully." });
}


export default router;