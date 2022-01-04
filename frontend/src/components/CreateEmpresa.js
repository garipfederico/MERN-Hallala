import React, { Component } from 'react'
import axios from 'axios'

export default class createEmpresa extends Component {

    state = {
        nombre: '',
        descripcion: '',
        mision: '',
        editing: false,
        _id: ''
    }
    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = await axios.get('http://localhost:4000/api/empresas/' + this.props.match.params.id)
            this.setState({
                editing: true,
                nombre: res.data.nombre,
                descripcion: res.data.descripcion,
                mision: res.data.mision,
                _id: this.props.match.params.id

            })
        }
    }

    onSubmit = async e => {
        e.preventDefault();
        const newEmpresa = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            mision: this.state.mision
        };
        if (this.state.editing) {
            await axios.put('http://localhost:4000/api/empresas/' + this.state._id, newEmpresa)
        }
        else {
            await axios.post('http://localhost:4000/api/empresas', newEmpresa);
        }
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
        const editando = this.state.editing;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h3 className='display-6'>
                        {editando ? 'Modificar Empresa' : 'Inscribir Empresa'
                        }
                    </h3>
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
                                onChange={this.onInputChange}
                                value={this.state.nombre} />
                        </div>
                        <div class="form-group row justify-content-center p-2">
                            <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="Descripcion"
                                name="descripcion"
                                onChange={this.onInputChange}
                                value={this.state.descripcion}>
                            </textarea>
                        </div>
                        <div class="form-group row justify-content-center p-2">
                            <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                placeholder="Mision"
                                name="mision"
                                onChange={this.onInputChange}
                                value={this.state.mision}
                            >
                            </textarea>
                        </div>
                    </div>
                    {/* miembros */}

                    <div className="row justify-content-end">
                        <button type="submit" className="btn btn-primary mr-4">
                            {editando ? 'Guardar' : 'Inscribir'}
                        </button>
                    </div>


                </form>
            </div>
        )
    }
}
