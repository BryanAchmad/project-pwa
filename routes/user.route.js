import express from "express";
import {create, deleteUser, get, getOne, update} from "../controllers/user.controller.js"
import { restrictTo, verifyUser } from "../middleware/auth.js";

const router = express.Router();

router.post('/user', verifyUser,restrictTo("admin", "alumni"), create);
router.get('/user', verifyUser, restrictTo("admin", "alumni"), get);
router.get('/user/:id', verifyUser, restrictTo("admin", "alumni"), getOne);
router.patch('/user/:id',verifyUser, restrictTo("admin", "alumni"), update);
router.delete('/user/:id', verifyUser, restrictTo("admin"), deleteUser);

export default router;