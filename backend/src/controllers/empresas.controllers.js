const empresasCtrl = {}
const Empresa = require('../models/empresa')

empresasCtrl.getEmpresas = async (req, res) => {
    const empresas = await Empresa.find();
    res.json(empresas);
}

empresasCtrl.crearEmpresa = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const newEmpresa = new Empresa({
        nombre: nombre,
        descripcion: descripcion
    });
    await newEmpresa.save();
    res.send('Empresa creada')
};

empresasCtrl.getEmpresa = async (req, res) => {
    const empresa = await Empresa.findById(req.params.id);
    res.json(empresa)
}; 

empresasCtrl.actualizarEmpresa = async (req, res) => {
    const { nombre, descripcion } = req.body;
    const empresa = await Empresa.findByIdAndUpdate(req.params.id, {
        nombre: nombre,
        descripcion: descripcion
    });
    res.json({ message: 'Empresa actualizada' })
};


empresasCtrl.deleteEmpresa = async (req, res) => {
    await Empresa.findByIdAndDelete(req.params.id)
    res.json({ message: 'Empresa eliminada' })
};

module.exports = empresasCtrl;

