import express from "express";
import { v4 as uuidv4 } from 'uuid';

class Server{
    app
    port
    constructor(){
        this.app = express()
        this.port = 3600
        this.cartProducts = [{
            name: "PC",
            value: 1000,
            shop: false,
            id: uuidv4()
        }]
        this.middlewares()
        this.routes()
    }
    
    middlewares(){
        this.app.use(express.json())
    }
    
    routes(){
        this.app.get("/", (req, res) =>{
            res.send("Hola Mundo")
        })
        
        this.app.get("/profile", (req, res) =>{
            res.status(200).json({
                msg: "Hola Usuario"
            })
        })
        
        this.app.post("/profile", (req, res) =>{
            
            const datos = req.body
            
            console.log(datos)
            
            res.status(200).json({
                msg: `Hola ${datos.name} tienes ${datos.edad} años` 
            })
        })
        
        this.app.get("/hola/:nombre", (req,res)=>{
            const datos2 = req.params
            
            res.status(200).json({
                msg: datos2.nombre
            })
        })
        
        this.app.get("/doblar/:numero", (req,res)=>{
            
            res.status(200).json({
                resultado: req.params.numero * 2
            })
        })
        
        this.app.get("/saludo", (req,res)=>{ //http://localhost:3600/saludo?nombre=Nickoll&edad=4 para verlo
            const datos = req.query
            
            console.log(datos)
            
            res.status(200).json(datos)
        })
        
        //=== Ejercicio de los grados celsius y fahrenheit===
        /*crear un nueva ruta/endpoint llamada convertir la cual su funciòn va
        ser retornar una conversión de grados a C a F
        
        el valor deber ser enviado por una query y el objeto de respuesta de la 
        petición va ser algo como 
        
        {
        "celsius": 25,
        "fahrenheit": 77
        }
        
        en caso de qué el valor no sea un numero, responder con un 400 y un mensaje de error
        
        Formula
        F = C * 1.8 + 32
        */
        this.app.get("/convertir", (req,res)=>{ //http://localhost:3600/convertir?valor=25
            const valor = Number(req.query.valor);
            const dir = req.query.dir ?? "f"; //por defecto C-F
            
            //Validar ANTES de operar: valor numèrico y dirección válida 
            const valorInvalido = req.query.valor === undefined || Number.isNaN(valor);
            const dirInvalida = dir !== "f" && dir !== "c";

            if (valorInvalido || dirInvalida) {
                res.status(400).json({ error: "Valor no válido" });
                return;
            }

            if (dir === "c") {
                //F-C
                const celsius = (valor - 32) / 1.8;
                res.json({ fahrenheint: valor, celsius});
            } else {
                //C-F
                const fahrenheint = valor * 1.8 + 32;
                res.json({ celsius: valor, fahrenheint});
            }
        });
        
        // === Ejercicio1 ===
        /*Un usuario quiere controlar los productos de su almacén, para ello
        quiere almacenar cada producto enviado por la api y hacer diferentes
        procedimientos co dichos productos;
        
        Para ello quiere un endpoint llamado /productos qué le permita listar
        todos los productos almacenados en el array,
        
        Otro endpoint para crear un nuevo producto pasando su nombre y valor
        por el body de la petición.
        
        Un endpoint qué le permita cmabiar una propiedad del producto de
        comprado a false o true segùn sea necesario.
        
        Otra ruta qué le permita eliminar el producto pasando unicamente el id
        del producto como parametro.
        
        Y finalmente una ruta /resumen para retornar un objeto con el total 
        de productos actuales del array y la cantidad de productos comprados
        actualmente*/
        
        this.app.get("/products", (req, res) => {
            console,log("Listado productos")

            res.status(200).json({
                products: this.cartProducts
            })
        })

        this.app.post("/products", (req, res) => {
            const data = req.body

            const product = {
                name: data.name,
                value:data.value,
                shop: false,
                id: uuidv4()
            }

            this.cartProducts.push(product)

            res.status(200).json({
                msg: "Producto creado correctamente",
                product
            })
        })

        this.app.patch("/product/:id", (req, res) => {
            const id = req.params.id

            let status = null

            this.cartProducts = this.cartProducts.map((product) => {
                if (product.id == id) {
                    status = !product.shop
                    product.shop = status
                }
                return product
            })
            console.log(this.cartProducts)

            res.status(200).json({
                msg: "Producto modificado correctamente",
                shop: status
            })
        })

        this.app.delete("/products/:id", (req, res) => {
            const id = req.params.id

            const index = this.cartProducts.findIndex((p) => p.id === id)

            if (index === -1) {
                res.status(404).json({ error: "Producto no encontrado" });
                return;
            }

            const deleted = this.cartProducts.splice(index, 1)[0];
            res.status(200).json({
                msg: "PRODUCTO ELIMINADO",
                product: deleted
            });
        });

        this.app.get("/products/summary", (req, res) => {
            const countShop = this.cartProducts.filter((prompt) => prompt.shop)
            res.status(200).json({
                msg: "PRODUCTO ELIMINADO",
                count: this.cartProducts.length,
                countShop: countShop.length
            });
        });
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Listen port " + this.port)
        })
    }
}

 

new Server().listen()
