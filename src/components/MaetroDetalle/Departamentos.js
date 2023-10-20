import React, { Component } from 'react'
import Empleados from './Empleados'
import Global from "../../global";
import axios from "axios";
export default class Departamentos extends Component {


    caja=React.createRef()


    state = {
        idDepar: -1,
        departamentos: [],
        statusDept: false,
        
      };






    loadDepartamentos=()=>{
        var request = "/api/departamentos";
        var url = Global.urlApieDepartamentos + request;
    
        axios.get(url).then((response) => {
          this.setState({
            departamentos: response.data,
            statusDept: true,
          });
        });
    }

    buscarEmpleados=(e)=>{
        e.preventDefault();
        var caja = this.caja.current.value;
        this.setState({
            idDepar: caja
          
          });
    }


    componentDidMount = () => {
        this.loadDepartamentos();
      };

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <form>

        <label>Seleccione un Departamento</label>
        <select ref={this.caja}>

        {this.state.statusDept == true &&
              this.state.departamentos.map((departamento, index) => {
                return (
                  <option value={departamento.Numero}>
                    {departamento.Nombre}
                  </option>
                );
              })}

        </select>
        <button onClick={this.buscarEmpleados}>Mostrar Empleados</button>
        <h2>Departamento seleccionado: {this.state.idDepar}</h2>

        </form>
        {
            this.state.idDepar!=1 &&
            (<Empleados iddepartamento={this.state.idDepar}></Empleados>)
        }
      </div>
    )
  }
}
