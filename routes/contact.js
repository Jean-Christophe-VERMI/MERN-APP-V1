import express from 'express';
import { contactAction } from '../controllers/contact.js';

const router = express.Router();

router.post('/contact', contactAction);

export default router;