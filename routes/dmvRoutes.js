import express from 'express'
const router = express.Router()
import {
  getSuspenededLicense,
} from '../controllers/dmvController.js'

router.route('/').get(getSuspenededLicense)

export default router
