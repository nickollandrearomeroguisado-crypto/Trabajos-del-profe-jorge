import { Router } from "express";
import { listProducts, createProducts, getProductById, updateProducts, deleteProducts, updateProductStock } from "../controllers/products.controller.js";
// import { productId, name, price, stock, stockRequerido, store } from "../validators/products.validators.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router()

router.get("/", listProducts)
router.post("/", [validarCampos], createProducts)
router.get("/:id", [validarCampos], getProductById)
router.put("/:id", [validarCampos], updateProducts)
router.delete("/:id", [validarCampos], deleteProducts)
router.patch("/:id/stock", [validarCampos], updateProductStock)

export default router

//node.js es un motor de ejecucion de javaScript