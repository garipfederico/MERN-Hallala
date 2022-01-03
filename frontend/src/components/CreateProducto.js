import React, { Component } from 'react'


export default class createProducto extends Component {
    render() {

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#Empresa">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#Miembros">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Miembros" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="Empresa" role="tabpanel" aria-labelledby="home-tab">Empresa...</div>
                    <div className="tab-pane fade" id="Miembros" role="tabpanel" aria-labelledby="profile-tab">Miembros</div>
                </div>
            </div>

        )
    }
}


