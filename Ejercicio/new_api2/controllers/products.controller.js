import Producto from "../models/products.model.js"

export const listProducts = async (req, res, next) => {
    try {
        const productos = await Producto.find().populate("store") //para mostrar solo el nombre de la tienda se le agrega una , y el nombre del campo que se quiere mostrar, ej: .populate("store", "name")
       
        res.status(200).json({
            ok: true,
            productos
        })

        // const productos2 = await Producto.create({
        //     name: "Producto 2",
        //     price: 20,
        //     stock: 10
        // })

        // res.status(201).json({
        //     ok: true,
        //     producto: productos2
        // })

    } catch (error) {
        next(error)
    }

}
export const createProducts = async (req, res, next) => {
    try {
        const nuevo = await Producto.create(req.body)

        console.log(nuevo)

        res.status(201).json({
            ok: true,
            nuevo
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const getProductById = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id)

        if (!producto) {
            res.status(404).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return
        }

        res.status(200).json({
            ok: true,
            producto
        })
    } catch (error) {
        next(error)
    }
}

export const updateProducts = async (req, res, next) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new : true });

        if (!producto) {
            res.status(404).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return;
        }

        res.status(200).json({
            ok: true,
            producto
        })
    } catch (error) {

        next(error);
    }
};

export const deleteProducts = async (req, res, next) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);

        if (!producto) {
            res.status(404).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return;
        }

        res.status(200).json({
            ok: true, 
            msg: "Producto eliminado"
        })
    } catch (error) {
        next(error);
    }
}

export const updateProductStock = async (req, res, next) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({
                ok: false,
                msg: "Producto no encontrado"
            })
            return;
        }

        producto.stock = req.body.stock;
        await producto.save();

        res.status(200).json({
            ok: true,
            producto
        })
    } catch (error) {
        next(error);
    }
}
