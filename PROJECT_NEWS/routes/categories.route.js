import { Router } from "express";
import categoriesController from "../controllers/categories.controller.js"

const router = Router()

router.get('/', categoriesController.getCategory)
router.post('/', categoriesController.addCategory)
router.delete('/:id', categoriesController.deleteCategory)



export default router