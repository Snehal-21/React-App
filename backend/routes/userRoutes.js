import express from "express";
import { loginChecks, registerChecks } from "../middlewares/auth.js";
import { getCurrentUser, login, register, verifyOtp, verifyPhone } from "../Controllers/user.cont.js";

const router=express.Router();

router.post('/register',registerChecks,register);
router.post('/login',loginChecks,login);
router.post('/getCurrentUser',getCurrentUser);

//twilio routes

router.post('/verifyPhone',verifyPhone);
router.post('/verifyOtp',verifyOtp);

export default router;