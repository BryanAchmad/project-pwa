import express from "express";
import { create, getByAlumniId, get, getOne, update, deletePekerjaan } from "../controllers/pekerjaan-alumni.controller.js"

const router = express.Router();

router.post('/pekerjaan/:id', create);
router.get('/pekerjaan/alumni/:alumniId', getByAlumniId);
router.get('/pekerjaan/:id', getOne);
router.get('/pekerjaan', get);
router.patch('/pekerjaan/:id', update);
router.delete('/pekerjaan/:id', deletePekerjaan);

export default router;