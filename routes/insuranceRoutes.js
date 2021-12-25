import express from 'express'
const router = express.Router()
import { fraudulentNIC } from '../controllers/insuranceController.js'

router.route('/').get(fraudulentNIC)

export default router
