import Store from "../models/store.model.js";

export const listStores = async (req, res, next) => {
    try {
        const stores = await Store.find({
            name: "Tienda 1",
            adress: "Calle 1"
        })

        res.status(200).json({
            ok: true,
            stores
        })
    } catch (error) {
        next(error)
    }
}

export const createStore = async (req, res, next) => {
    try {
        const nuevo = await Store.create(req.body)

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

export const getStoreById = async (req, res, next) => {
    try {
        const store = await Store.findById(req.params.id)

        if (!store) {
            res.status(404).json({
                ok: false,
                msg: "Tienda no encontrada"
            })
            return
        }

        res.status(200).json({
            ok: true,
            store
        })
    } catch (error) {
        next(error)
    }
}

export const updateStore = async (req, res, next) => {
    try {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!store) {
            res.status(404).json({
                ok: false,
                msg: "Tienda no encontrada"
            })
            return;
        }

        res.status(200).json({
            ok: true,
            store
        })
    } catch (error) {
        next(error)
    }
}

export const deleteStore = async (req, res, next) => {
    try {
        const store = await Store.findByIdAndDelete(req.params.id);

        if (!store) {
            res.status(404).json({
                ok: false,
                msg: "Tienda no encontrada"
            })
            return;
        }

        res.status(200).json({
            ok: true,
            msg: "Tienda eliminada correctamente"
        })
    } catch (error) {
        next(error)
    }
}

export const updateStoreAdress = async (req, res, next) => {
    try {
        const store = await Store.findById(req.params.id);

        if (!store) {
            res.status(404).json({
                ok: false,
                msg: "Tienda no encontrada"
            })
            return;
        }

        store.adress = req.body.adress;
        await store.save();

        res.status(200).json({
            ok: true,
            store
        })
    } catch (error) {
        next(error);
    }
}