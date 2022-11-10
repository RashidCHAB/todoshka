import { Router } from "express";
import newsRoute from "./news.route.js"
import categoriesRoute from "./categories.route.js";
import commentsRoute from "./comments.route.js"

const router = Router()

router.use('/news', newsRoute)
router.use('/categories', categoriesRoute)
router.use('/comments', commentsRoute)

export default router