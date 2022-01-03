import React, { Component } from 'react'
import axios from 'axios'

export default class createEmpresa extends Component {

    state = {
        nombre: '',
        descripcion: ''
    }
    componentDidMount() {

    }

    onSubmit = async e => {
        e.preventDefault();
        const newEmpresa = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion
        }
        await axios.post('http://localhost:4000/api/empresas', newEmpresa );
        window.location.href = '/empresas'
    }

    onInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.nombre)
    }

    render() {

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h3 className='display-6'>Inscribir Empresa</h3>
                </div>
                <label className="row justify-content-start mt-4">
                    <h6>Datos de la Empresa</h6>
                </label>
                <form onSubmit={this.onSubmit}>
                    {/* empresa */}
                    <div id="1">
                        <div className="row justify-content-center p-2">
                            <input className="form-control "
                                type="text"
                                placeholder="Nombre"
                                name="nombre"
                                onChange={this.onInputChange} />
                        </div>
                        <div class="form-group row justify-content-center p-2">
                            <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="Descripcion"
                                name="descripcion"
                                onChange={this.onInputChange}>
                            </textarea>
                        </div>
                        <div class="form-group row justify-content-center p-2">
                            <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="Mision"
                                name="mision">
                            </textarea>
                        </div>
                    </div>
                    {/* miembros */}

                    <div className="row justify-content-end">
                        <button type="submit" className = "btn btn-primary mr-4">Submit</button>
                    </div>


                </form>
            </div>
        )
    }
}
