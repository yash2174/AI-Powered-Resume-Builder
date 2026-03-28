import express from 'express';
import { getResume, saveResume } from '../controllers/resume.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getResume);
router.post('/', authMiddleware, saveResume);

export default router;
