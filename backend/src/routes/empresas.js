const { Router } = require('express');
const router = Router();
const {getEmpresas, crearEmpresa, getEmpresa, actualizarEmpresa, deleteEmpresa}
= require('../controllers/empresas.controllers')

router.route('/')
.get(getEmpresas)
.post(crearEmpresa)

router.route('/:id')
.get(getEmpresa)
.put(actualizarEmpresa)
.delete(deleteEmpresa)
module.exports = router;
