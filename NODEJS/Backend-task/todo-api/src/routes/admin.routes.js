

import { Router } from 'express';
import { isAuthenticated, isAdmin } from '../middleware/auth.middleware.js';
import { adminSignup, adminSignin, getAllUsers } from '../controllers/admin.controller.js';

const router = Router();

router.post('/signup', adminSignup);
router.post('/signin', adminSignin);


router.get('/users', isAuthenticated, isAdmin, getAllUsers);

export default router;