import express from 'express';
import { newuser, login } from '../controller/user.controller.js'; 
const router=express.Router();

router.post("/Newuser", newuser);
router.post("/login", login);

export default router;