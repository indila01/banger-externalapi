import express from 'express'
const router = express.Router()
import { getPrices } from '../controllers/webScrapeController.js'

router.route('/').get(getPrices)

export default router
