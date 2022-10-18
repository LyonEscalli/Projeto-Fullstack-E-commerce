import express from "express";

import { ProductController } from "../ProductController";

export const productRouter = express.Router()

const productControl = new ProductController()

productRouter.get('/', productControl.getAllProducts)