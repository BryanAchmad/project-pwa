import express from "express";
import {create, getByAlumniId, get, getOne, update, deleteBiodata } from "../controllers/biodata-alumni.controller.js"

const router = express.Router();

router.post('/biodata/:id', create);
router.get('/biodata/alumni/:alumniId', getByAlumniId);
router.get('/biodata/:id', getOne);
router.get('/biodata', get);
router.put('/biodata/:id', update);
router.delete('/biodata/:id', deleteBiodata);

export default router;