import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TablaMultiplicar from "./TablaMultiplicar";
import Home from "./rutasParametros/Home";
import NotFound from "./rutasParametros/NotFound";
import Collatz from "./RutasCollaz/Collatz";
import MenuRutasCollaz from "./RutasCollaz/MenuRutasCollaz";
export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      // Esta funcion permite capturar los parametros de la ruta d forma dinamia
      // Vamos a recibir un parametro llamado mi numero

      var { minumero } = useParams();

      // devolvemos la etiqueta <TablaMultiplicar/> con su props de numero
      return <TablaMultiplicar numero={minumero} />;
    }

    function CollatzElement() {
      var { numero } = useParams();
      return <Collatz numero={numero}/>
    }

    return (
      <BrowserRouter>
      <MenuRutasCollaz/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/collatz/:numero" element={<CollatzElement/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}