import express from "express";

import { PurchaseController } from '../PurchaseController'

export const purchaseRouter = express.Router()

const purchaseControl = new PurchaseController()

purchaseRouter.post('/new', purchaseControl.createPurchase)
purchaseRouter.get('/:id', purchaseControl.getCart)