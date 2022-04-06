import express from "express";

import {getDiarys, getDiary, createDiary, updateDiary, deleteDiary} from "../controllers/diary.js";

const router = express.Router();

router.get('/', getDiarys);
router.post('/', createDiary);
// router.get('/:id', getDiary);
// router.patch('/:id', updateDiary);
// router.delete('/:id', deleteDiary);

export default router;
