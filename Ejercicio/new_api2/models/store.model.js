//El "plano" de un producto: Schema + modelo
import { Schema, model } from "mongoose";

const productStore = new Schema({
    name: { type: String, required: true },
    // Extra: validación desde el Schema
    adress: { type: String, required: true },
    nameOwner: { type: String, required: true },
}, {
    timestamps: true, //Crea automáticamente los campos createdAt y updatedAt
    versionKey: false //Elimina el campo __v que mongoose crea por defecto
});

export default model("Store", productStore);