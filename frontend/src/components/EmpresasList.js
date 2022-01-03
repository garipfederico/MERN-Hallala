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
                            <h5 className="card-title">{empresa.nombre}</h5>
                            <p className="card-text">{empresa.descripcion}</p>
                        </div>
                        <button className='btn btn-primary' onClick={() => this.deleteEmpresa(empresa._id)}>Eliminar</button>
                    </div>)
                   
               )}
            </div>
        )
    }
}

export default EmpresasList



