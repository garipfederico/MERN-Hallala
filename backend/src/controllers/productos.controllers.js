const productosCtrl = {};
//const { findByIdAndUpdate, findByIdAndDelete } = require('../models/producto');
const Producto = require('../models/producto')

productosCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

productosCtrl.createProducto = async (req, res) => {
    const { nombre, categorias, descripcion } = req.body;
    const newProducto = new Producto({
        nombre: nombre,
        categorias: categorias,
        descripcion: descripcion
    });
    await newProducto.save();
    res.json({ message: 'Producto guardado' })
};

productosCtrl.getProducto = async (req, res) => {
const producto = await Producto.findById(req.params.id)
    res.json(producto)
};

productosCtrl.actualizarProducto = async (req, res) => {
    const { nombre, categorias, descripcion } = req.body;
    await Producto.findByIdAndUpdate(req.params.id, {
        nombre: nombre,
        categorias: categorias,
        descripcion: descripcion
    });
    res.json({message: 'Producto actualizado'});
};

productosCtrl.deleteProducto = async (req, res) =>{
    await Producto.findByIdAndDelete(req.params.id);
    res.json({message: 'Producto eliminado'})
}

module.exports = productosCtrl;

