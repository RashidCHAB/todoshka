import { Router } from "express";
import newsController from "../controllers/news.controller.js"

const router = Router()

router.get('/', newsController.getNews)
router.get('/:id', newsController.getNewsById)
router.get('/category/:categoryID', newsController.getNewsByCategory)

router.post('/', newsController.addNews)
router.patch('/:id', newsController.updateNews)
router.delete('/:id', newsController.deleteNews)

export default router