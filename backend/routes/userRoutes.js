import express from "express";
import { loginChecks, registerChecks } from "../middlewares/auth.js";
import { login, register } from "../Controllers/user.cont.js";

const router=express.Router();

router.post('/register',registerChecks,register);
router.post('/login',loginChecks,login);

export default router;