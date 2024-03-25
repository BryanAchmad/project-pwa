import express from "express";
import { create, getByAlumniId, get, getOne, update, deleteBiodata } from "../controllers/akademik-alumni.controller.js"

const router = express.Router();

router.post('/akademik/:id', create);
router.get('/akademik/alumni/:alumniId', getByAlumniId);
router.get('/akademik/:id', getOne);
router.get('/akademik', get);
router.patch('/akademik/:id', update);
router.delete('/akademik/:id', deleteBiodata);

export default router;