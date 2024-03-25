import express from "express";
import { create, getByAlumniId, get, getOne, update, deletePrestasi } from "../controllers/prestasi-alumni.controller.js"

const router = express.Router();

router.post('/prestasi/:id', create);
router.get('/prestasi/alumni/:alumniId', getByAlumniId);
router.get('/prestasi/:id', getOne);
router.get('/prestasi', get);
router.patch('/prestasi/:id', update);
router.delete('/prestasi/:id', deletePrestasi);

export default router;