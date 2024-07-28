import express from 'express';
import { deleteUser, getUser, signout, test, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router()

router.get('/test',test);
router.put('/update/:userId',verifyToken, updateUser);
router.delete('/delete/:userId',verifyToken, deleteUser);
router.post('/signout',signout);
router.get('/getusers',verifyToken,getUser);
export default router;