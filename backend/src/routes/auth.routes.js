import express from 'express';
import { register, login, verify } from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { verifyOTP } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/verify', authMiddleware, verify);
router.post('/verify-otp', verifyOTP);


export default router;
