import express from "express";

import {getDiarys, getDiary, createDiary, updateDiary, deleteDiary} from "../controllers/diary.js";

const router = express.Router();

router.get('/:id', getDiarys);
router.post('/', createDiary);
router.get('/:id', getDiary);
router.patch('/:id/:id', updateDiary);
// router.delete('/:id', deleteDiary);

export default router;
