import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro';
import Compras from './Compras/Compras';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/compras" component={Compras} />
      </BrowserRouter>
    </div>
  )
}
export default App;