import { Router } from "express";
import commentsController from "../controllers/comments.controller.js";

const router = Router()

router.get('/:newsId', commentsController.getCom)
router.post('/:newsId', commentsController.addCom)
router.delete('/:comId', commentsController.deleteCom)

export default router