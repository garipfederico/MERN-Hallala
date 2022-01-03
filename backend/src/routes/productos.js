const { Router } = require('express');
const router = Router();
const { getProductos, createProducto, getProducto, actualizarProducto, deleteProducto } 
= require('../controllers/productos.controllers');

router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/:id')
.get(getProducto)
.put(actualizarProducto)
.delete(deleteProducto);

module.exports = router;
