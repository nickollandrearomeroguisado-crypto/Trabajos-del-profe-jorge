import { check } from "express-validator"

const name = check("name", "El nombre es obligatorio")
.trim()
.not().isEmpty()
.isString()
.isLength({ min: 3, max: 50 })
.withMessage("El nombre debe tener entre 3 y 50 caracteres")
.custom((value) => {
    if (value.toLowerCase().includes("store")) {
        throw new Error("El nombre no puede contener la palabra 'store'");
    }
    return true;
});

const adress = check("adress", "La dirección es obligatoria")
.trim()
.not().isEmpty()
.isString()
.isLength({ min: 5, max: 100 })
.withMessage("La dirección debe tener entre 5 y 100 caracteres")
.custom((value) => {
    if (value.toLowerCase().includes("store")) {
        throw new Error("La dirección no puede contener la palabra 'store'");
    }
    return true;
});

const nameOwner = check("nameOwner", "El nombre del propietario es obligatorio")
.trim()
.not().isEmpty()
.isString()
.isLength({ min: 3, max: 50 })
.withMessage("El nombre del propietario debe tener entre 3 y 50 caracteres")
.custom((value) => {
    if (value.toLowerCase().includes("store")) {
        throw new Error("El nombre del propietario no puede contener la palabra 'store'");
    }
    return true;
});

const storeId = check("id", "El id no es valido")
.not().isEmpty()
.isMongoId().withMessage("El id debe ser un id de mongo valido")

export {
    name,
    adress,
    nameOwner,
    storeId
}