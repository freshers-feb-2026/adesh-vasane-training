

import { Router } from 'express';
import { userSignup, userSignin } from '../controllers/auth.controller.js';

const router = Router();

router.post('/signup', userSignup);
router.post('/signin', userSignin);

export default router;