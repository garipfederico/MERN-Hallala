import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import CreateProducto from './components/CreateProducto';
import CreateEmpresa from './components/CreateEmpresa';
import NavigationBar from './components/NavigationBar';
import ProductosList from './components/ProductosList';
import EmpresasList from './components/EmpresasList'
import Prueba from './components/prueba'


function App() {
  return (
    <Router>
      <NavigationBar />
      <Route path="/" exact component={ProductosList} />
      <Route path="/edit/:id" exact component={CreateProducto} />
      <Route path="/create" exact component={CreateProducto} />
      <Route path="/empresa" exact component={CreateEmpresa} />
      <Route path="/empresas" exact component={EmpresasList} />
      <Route path="/actualizarEmpresas/:id" exact component={CreateEmpresa} />
      <Route path="/prueba" exact component={Prueba} />
    </Router>
  );
}

export default App;
