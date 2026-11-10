//El "plano" de un producto: Schema + modelo
import { Schema, model } from "mongoose";

const productSchema = new Schema({
    store: { //relación con la tienda
        type: Schema.Types.ObjectId,
        ref: "Store",
        required: true
    },
    name: { type: String, required: true },
    // Extra: validación desde el Schema
    price: { type: Number, default: 0, min: 0 },
    stock: { type: Number, default: 0, min: 0},
}, {
    timestamps: true, //Crea automáticamente los campos createdAt y updatedAt
    versionKey: false //Elimina el campo __v que mongoose crea por defecto
});

//Modelo en MAYÚSCULAS singular -> colección "product" en minúsculas plural
export default model("Producto", productSchema);
