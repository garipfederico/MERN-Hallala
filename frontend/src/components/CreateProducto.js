/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from 'react'
export default class createProducto extends Component {
    render() {
        return (
            <div>
                <div>
                {/* Aca uso el href */}
                    {/* <nav className="nav nav-tabs justify-content-center " id="navigation" role="tablist">
                        <a href="#contenido-inicio" className="nav-link active" data-bs-toggle="tab" rol="tab " aria-selected="true" id="inicio-tab" aria-controls="contenido-inicio">Inicio</a>
                        <a href="#contenido-servicio" className="nav-link" data-bs-toggle="tab" rol="tab" aria-selected="false" id="servicio-tab" aria-controls="contenido-servicio">Servicios</a>
                        <a href="#contenido-blog" className="nav-link" data-bs-toggle="tab" rol="tab" aria-selected="false" id="blog-tab" aria-controls="contenido-blog">Blog</a>
                        <a href="#contenido-contacto" className="nav-link" data-bs-toggle="tab" rol="tab" aria-selected="false" id="contacto-tab" aria-controls="contenido-contacto">Contacto</a>
                    </nav> */}
                    {/* Se puede usar tanto el href como el data-bs-target, pero no ambos. */}
                    <nav className="nav nav-tabs justify-content-center " id="navigation" role="tablist">
                        <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#contenido-inicio" rol="tab " aria-selected="true" id="inicio-tab" aria-controls="contenido-inicio">Inicio</a>
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#contenido-servicio" rol="tab" aria-selected="false" id="servicio-tab" aria-controls="contenido-servicio">Servicios</a>
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#contenido-blog" rol="tab" aria-selected="false" id="blog-tab" aria-controls="contenido-blog">Blog</a>
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#contenido-contacto" rol="tab" aria-selected="false" id="contacto-tab" aria-controls="contenido-contacto">Contacto</a>
                    </nav>
                    {/* Contenido */}
                    <div className="tab-content" id="contenido-nav">
                        {/* Inicio */}
                        <div className="tab-pane fade show active" role="tab" id="contenido-inicio" aria-labelledby="inicio-tab">
                            <h1>Inicio</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro quam distinctio pariatur
                                illum consequuntur natus, dolore beatae vitae omnis!</p>
                        </div>
                        {/* Servicios */}
                        <div className="tab-pane fade" role="tab" id="contenido-servicio" aria-labelledby="servicio-tab">
                            <h1>Servicios</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, minima tempore harum perferendis quos,
                                voluptatem praesentium, aperiam fuga consequatur cumque voluptas beatae optio incidunt et recusandae
                                commodi quibusdam sint pariatur modi deserunt illum. Incidunt recusandae labore eligendi voluptatibus at
                                minus.</p>
                        </div>
                        {/* Blog */}
                        <div className="tab-pane fade" role="tab" id="contenido-blog" aria-labelledby="blog-tab">
                            <h1>Blog</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat illum consequuntur vel corporis
                                id aspernatur voluptatum? Consectetur necessitatibus asperiores error reiciendis, soluta obcaecati
                                molestias?.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat illum consequuntur vel corporis
                                id aspernatur voluptatum? Consectetur necessitatibus asperiores error reiciendis, soluta obcaecati
                                molestias?.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat illum consequuntur vel corporis
                                id aspernatur voluptatum? Consectetur necessitatibus asperiores error reiciendis, soluta obcaecati
                                molestias?.</p>
                        </div>
                        {/* Contacto */}
                        <div className="tab-pane fade" role="tab" id="contenido-contacto" aria-labelledby="contacto-tab">
                            <h1>Contacto</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, voluptatibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


