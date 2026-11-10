import { Router } from "express";
import { listStores, createStore, getStoreById, updateStore, deleteStore, updateStoreAdress } from "../controllers/store.controller.js";
import { name, adress, nameOwner, storeId } from "../validators/stores.validators.js";

const router = Router()

router.get("/", listStores)
router.post("/",
    [name, adress, nameOwner], createStore)
router.get("/:id",[storeId], getStoreById)
router.put("/:id",[storeId, name, adress, nameOwner], updateStore)
router.delete("/:id",[storeId], deleteStore)
// router.patch("/:id/adress", updateStoreAdress)

export default router