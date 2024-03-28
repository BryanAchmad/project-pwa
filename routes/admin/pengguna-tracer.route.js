import express from "express";
import { getAllPenggunaTracer, getPenggunaTracer } from "../../controllers/admin/pengguna-tracer.controller.js"
import {restrictTo, verifyUser} from "../../middleware/auth.js"

const router = express.Router();

router.get('/admin/pengguna-tracer', verifyUser, restrictTo('admin') ,getAllPenggunaTracer);
router.get('/admin/pengguna-tracer/:id', verifyUser, restrictTo('admin'), getPenggunaTracer);

export default router;