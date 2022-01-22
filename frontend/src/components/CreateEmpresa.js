/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import axios from 'axios'
// import { Tab } from '../../node_modules/bootstrap/js/dist/tab'
export default class createEmpresa extends Component {

    state = {
        nombre: '',
        descripcion: '',
        mision: '',
        editing: false,
        editingMiembro: false,
        idMiembroActual: '',
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
                _id: this.props.match.params.id,
                miembros: res.data.miembros

            })
        }
    }

    onSubmit = async e => {
        e.preventDefault();
        const newEmpresa = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            mision: this.state.mision,
            miembros: this.state.miembros
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
        document.getElementById('botonCancelar').classList.remove('disabled')
        document.getElementById('botonAgregar').classList.remove('disabled')

    }

    // Click en el boton agregar o guardar miembro
    onClickAgregar = () => {
        if (this.state.editingMiembro) {
            const miembros = this.state.miembros;
            const id = this.state.idMiembroActual
            const index = id;
            const miembro = {
                nombre: this.state.nombreMiembro,
                apellido: this.state.apellidoMiembro,
                cargo: this.state.cargoMiembro,
                id: id, //Que para el caso es el index
            }

            let newMiembros = [...miembros]
            newMiembros[index] = miembro
            this.setState(state => {
                return {
                    miembros: newMiembros,
                    nombreMiembro: '',
                    apellidoMiembro: '',
                    cargoMiembro: '',
                    idMiembroActual: '',
                    editingMiembro: false
                }
            })
        } else {
            this.setState(state => {
                const id = this.state.miembros.length
                console.log(id)
                const miembro = {
                    nombre: this.state.nombreMiembro,
                    apellido: this.state.apellidoMiembro,
                    cargo: this.state.cargoMiembro,
                    id: id,
                }
                const miembros = state.miembros.concat(miembro);
                return {
                    miembros,
                    nombreMiembro: '',
                    apellidoMiembro: '',
                    cargoMiembro: '',
                }
            })
            document.getElementById("nombreMiembro").focus();
            document.getElementById('botonCancelar').classList.add('disabled')
            document.getElementById('botonAgregar').classList.add('disabled')
        }
    }

    onClickSiguiente = e => {

        const tabEmpresa = document.getElementById("inicio-tab")
        tabEmpresa.classList.remove("active")
        const tabMiembros = document.getElementById("servicio-tab")
        tabMiembros.classList.add("active")
        // El contenido
        const contEmpresa = document.getElementById("contenido-empresa")
        contEmpresa.classList.remove("active", "show")
        const contMiembros = document.getElementById("contenido-miembro")
        contMiembros.classList.add("active", "show")
    }

    onMiembroclick(id) {
        const miembro = this.state.miembros.find(miembro => miembro.id === id);
        const nombre = miembro.nombre;
        const apellido = miembro.apellido;
        const cargo = miembro.cargo;
        // console.log(nombre)
        this.setState(state => {
            return {
                nombreMiembro: nombre,
                apellidoMiembro: apellido,
                cargoMiembro: cargo,
                idMiembroActual: id,
                editingMiembro: true
            }
        }
        )
        document.getElementById('botonCancelar').classList.remove('disabled')
    }

    onClickBorrar = () => {
        const index = this.state.idMiembroActual
        const miembros = this.state.miembros
        const newMiembros = miembros.filter(checkId)
        function checkId(miembro) {
            console.log(miembro.id + ' ' + index)
            return miembro.id !== index
        }
        this.setState(state => {
            return {
                miembros: newMiembros,
                nombreMiembro: '',
                apellidoMiembro: '',
                cargoMiembro: '',
                idMiembroActual: '',
                editingMiembro: false
            }
        })
        
    }

    onClickCancelar = () => {
        this.setState(state => {
            return {
                nombreMiembro: '',
                apellidoMiembro: '',
                cargoMiembro: '',
                idMiembroActual: '',
                editingMiembro: false
            }
        }
        )
        document.getElementById('botonCancelar').classList.add('disabled')
        document.getElementById('botonAgregar').classList.add('disabled')
    }

    render() {
        const editando = this.state.editing;
        const editandoMiembro = this.state.editingMiembro;
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
                        <div className="tab-pane fade show active" role="tab" id="contenido-empresa" aria-labelledby="inicio-tab">
                            <div className="container">
                                <div className="bg-light p-5">
                                    <label className="row justify-content-start mt-4">
                                        <h6 className='lead'>Datos de la Empresa</h6>
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
                        <div className="tab-pane fade" role="tab" id="contenido-miembro" aria-labelledby="servicio-tab">
                            <div className="container">
                                <div className="bg-light">
                                    <label className="row justify-content-start mt-4">
                                        <h6 className='lead'>Carga de miembros</h6>
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
                                    </div>
                                    <div className="row justify-content-center justify-content-md-end px-md-4">
                                        <div className="col-2 my-2 mx-3 text-center">
                                            <button type="button" id="botonAgregar" className="btn btn-success disabled" onClick={this.onClickAgregar}>
                                                {editandoMiembro ? 'Guardar miembro' : 'Agregar'}</button>
                                        </div>
                                        {editandoMiembro
                                            ?
                                            <div className="col-2 my-2 mx-3 text-center">
                                                <button type="button" className="btn btn-danger" onClick={this.onClickBorrar}>
                                                    Borrar miembro</button>
                                            </div>
                                            : ""}
                                        <div className="col-2 my-2 mx-3 text-center">
                                            <button type="button" id="botonCancelar" className="btn btn-danger disabled" onClick={this.onClickCancelar}>
                                                Cancelar</button>
                                        </div>
                                    </div>
<h6 className="lead ">Miembros:</h6>
                                    <div id="miembros" className='row m-3 justify-content-center'>
                                        <ul class="list-group col-md-6 list-group-flush mb-3">
                                            {this.state.miembros.map(miembro => (
                                                <li key={miembro.id} className="list-group-item  list-group-item-action "
                                                    onClick={() => this.onMiembroclick(miembro.id)}>
                                                    {miembro.nombre} {miembro.apellido} <em>({miembro.cargo})</em>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5">
                                    <button type="submit" className="btn btn-primary col-md-4">
                                        {editando ? 'Finalizar' : 'Inscribir'}
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
