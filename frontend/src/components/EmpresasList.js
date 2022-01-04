import axios from 'axios';
import React, { Component } from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'


export class EmpresasList extends Component {
    state = {
        empresas: []
    }
    componentDidMount() {
        this.getEmpresas()
    }

    async getEmpresas() {
        const res = await axios.get('http://localhost:4000/api/empresas');
        this.setState({ empresas: res.data })
    }

    deleteEmpresa = async (id) => {
        await axios.delete('http://localhost:4000/api/empresas/' + id);
        this.getEmpresas();
    }

    

    render() {
        return (
            <div className='row d-flex'>
                {this.state.empresas.map(empresa => (
                    <div className="card col-3 m-2 p-3">
                        <div className="card-body">
                            <h5 className="card-title col-12 display-6 text-white bg-secondary rounded text-center">{empresa.nombre}</h5>
                            <p className="card-text fw-bold">{empresa.descripcion}</p>
                            <p className="card-text fst-italic">{empresa.mision}</p>
                        </div>
                        <div className='row justify-content-evenly'>
                            <Link className="btn btn-success btn-sm col-4" to={"/actualizarEmpresas/" + empresa._id}>Modificar</Link>
                            <button className='btn btn-danger btn-sm col-4' onClick={() => this.deleteEmpresa(empresa._id)}>Eliminar</button>
                        </div>
                    </div>)

                )}
            </div>
        )
    }
}

export default EmpresasList



