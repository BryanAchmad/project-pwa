import express from "express";
import { getAllVerifikasiAlumni, getVerifikasiAlumni } from "../../controllers/admin/verifikasi-alumni.controller.js"
import {restrictTo, verifyUser} from "../../middleware/auth.js"

const router = express.Router();

router.get('/admin/verifikasi-alumni', verifyUser, restrictTo('admin') , getAllVerifikasiAlumni);
router.get('/admin/verifikasi-alumni/:id', verifyUser, restrictTo('admin') , getVerifikasiAlumni);

export default router;