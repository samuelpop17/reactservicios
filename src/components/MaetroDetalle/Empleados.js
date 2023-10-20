import React, { Component } from 'react'
import Global from "../../global";
import axios from "axios";
export default class Empleados extends Component {

state={
    empleados:{},
    status:false
}

loadEmpleados=()=>{
    var idDept = this.props.iddepartamento;
    var request="api/empleados/empleadosdepartamento/"+idDept;
    var url=Global.urlApieEmpleados+request;
    
        axios.get(url).then(response=>{
            this.setState({
                empleados:response.data,
                status:true
            })
        })
}

componentDidUpdate=()=>{
    this.loadEmpleados();
}
  render() {
    return (
      <div>
        <h1>Empleados: {this.props.iddepartamento}</h1>
       

        <table style={{ border: "2px" }}>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              
            </tr>
          </thead>
          <tbody>
            {
                this.state.status==true &&
            this.state.empleados.map((empleado, index) => (
              <tr key={index}>
                <td>{empleado.apellido}</td>
                <td>{empleado.oficio}</td>
                <td>{empleado.salario}</td>
              </tr>
            ))
            }
          </tbody>
        </table>

      </div>
    )
  }
}
