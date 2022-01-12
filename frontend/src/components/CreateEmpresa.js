/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios'
import { Tab } from '../../node_modules/bootstrap/js/dist/tab'
// import bootstrap from 'bootstrap'

export default class createEmpresa extends Component {

    state = {
        nombre: '',
        descripcion: '',
        mision: '',
        editing: false,
        _id: '',
        nombreMiembro: '',
        apellidoMiembro: '',
        cargoMiembro: '',
        miembros: []
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

    onClickAgregar = () => {
        const miembro = {
            nombre: this.state.nombreMiembro,
            apellido: this.state.apellidoMiembro,
            cargo: this.state.cargoMiembro,
        }
        this.setState(state => {
            const miembros = state.miembros.concat(miembro);
            return {
                miembros,
                nombreMiembro: '',
                apellidoMiembro: '',
                cargoMiembro: ''
            }
        })
    }



    // Ver bien como importar bootstrap tab para implementar metodo show
    onClickSiguiente = e => {
        
        //     e.Tab.shown()
        //     var tab = new bootstrap.Tab()
        // Las tabs


        const tabEmpresa = document.getElementById("inicio-tab")
        tabEmpresa.classList.remove("active")
        const tabMiembros = document.getElementById("servicio-tab")
        tabMiembros.classList.add("active")
        // El contenido
        const contEmpresa = document.getElementById("contenido-empresa")
        contEmpresa.classList.remove("active", "show")
        const contMiembros = document.getElementById("contenido-miembro")
        contMiembros.classList.add("active", "show")

        // ------------prueba 2 ----------------- esta es de la documentacion


        // ------------prueba 3 -----------------

        // var myCollapseEl = document.getElementById('myCollapse')

        // myCollapseEl.addEventListener('shown.bs.collapse', function (event) {
        // Action to execute once the collapsible area is expanded
        // })
    }


    render() {
        const editando = this.state.editing;
        return (
            <div>
                {/* TITULO */}
                < div className="container" >
                    <div className="row justify-content-center">
                        <h3 className='display-6'>
                            {editando ? 'Modificar Empresa' : 'Inscribir Empresa'
                            }
                        </h3>
                    </div>
                </div >
                <form onSubmit={this.onSubmit}>
                    {/* TABS */}
                    <nav className="nav nav-tabs justify-content-center " id="navigation" role="tablist">
                        <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#contenido-empresa" rol="tab " aria-selected="true" id="inicio-tab" aria-controls="contenido-empresa">Empresa</a>
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#contenido-miembro" rol="tab" aria-selected="false" id="servicio-tab" aria-controls="contenido-miembro">Miembros</a>
                    </nav>
                    {/* CONTENIDO */}
                    <div className="tab-content" id="contenido-nav">
                        {/* EMPRESA */}
                        <div className="tab-pane fade " role="tab" id="contenido-empresa" aria-labelledby="inicio-tab">
                            <div className="container">
                                <label className="row justify-content-start mt-4">
                                    <h6>Datos de la Empresa</h6>
                                </label>

                                <div id="1">
                                    <div className="row justify-content-center p-2">
                                        <input className="form-control "
                                            type="text"
                                            placeholder="Nombre:"
                                            name="nombre"
                                            onChange={this.onInputChange}
                                            value={this.state.nombre} />
                                    </div>
                                    <div class="form-group row justify-content-center p-2">
                                        <textarea class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                            placeholder="Descripcion:"
                                            name="descripcion"
                                            onChange={this.onInputChange}
                                            value={this.state.descripcion}>
                                        </textarea>
                                    </div>
                                    <div class="form-group row justify-content-center p-2">
                                        <textarea class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                            placeholder="Mision:"
                                            name="mision"
                                            onChange={this.onInputChange}
                                            value={this.state.mision}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <button type="button" className="btn btn-primary btn col-md-4" onClick={() => this.onClickSiguiente()}>
                                        {/* <button id="btn-sig" type="button" className="btn btn-primary btn col-md-4"> */}
                                        Siguiente
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* MIEMBRO */}
                        <div className="tab-pane fade show active" role="tab" id="contenido-miembro" aria-labelledby="servicio-tab">
                            <div className="container">
                                <label className="row justify-content-start mt-4">
                                    <h6>Datos de los miembros</h6>
                                </label>
                                <div class="row row-cols-1 row-cols-md-5  form-group justify-content-center p-2">
                                    <div className="col col-md-4 m-2">
                                        <input class="form-control"
                                            id="nombreMiembro"
                                            placeholder="Nombre"
                                            name="nombreMiembro"
                                            onChange={this.onInputChange}
                                            value={this.state.nombreMiembro}
                                        >
                                        </input>
                                    </div>
                                    <div className="col m-2">
                                        <input class="form-control"
                                            id="apellidoMiembro"
                                            placeholder="Apellido"
                                            name="apellidoMiembro"
                                            onChange={this.onInputChange}
                                            value={this.state.apellidoMiembro}
                                        >
                                        </input>
                                    </div>
                                    <div className="col m-2">
                                        <input class="form-control"
                                            id="cargoMiembro"
                                            placeholder="Cargo"
                                            name="cargoMiembro"
                                            onChange={this.onInputChange}
                                            value={this.state.cargoMiembro}
                                        >
                                        </input>
                                    </div>
                                    <div className="col m-2 justify-content-center ">
                                        <button type="button" className="btn btn-success" onClick={this.onClickAgregar}>Agregar</button>
                                    </div>
                                </div>
                                <div id="miembros" className='row m-3 justify-content-center'>
                                    <ul class="list-group col-md-6 list-group-flush">
                                        {this.state.miembros.map(miembro => (
                                            <li key={miembro} className="list-group-item  list-group-item-action ">{miembro.nombre} {miembro.apellido} <em>({miembro.cargo})</em></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="row justify-content-center">
                                    <button type="submit" className="btn btn-primary col-md-4">
                                        {editando ? 'Guardar' : 'Inscribir'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
}
