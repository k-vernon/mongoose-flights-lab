import { Router } from "express";
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

router.get('/', flightsCtrl.index)
router.post('/', flightsCtrl.create)
router.get('/new', flightsCtrl.new)

export {
  router
}