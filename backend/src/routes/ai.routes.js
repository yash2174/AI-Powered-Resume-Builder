import express from 'express';
import { analyzeResumeController, analyzeCareerController } from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/resume', analyzeResumeController);
router.post('/career', analyzeCareerController);

export default router;
