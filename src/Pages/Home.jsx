import React, { Component } from 'react'

export class RTP extends Component {
  render() {
    return (
        <>
            <h1>Bienvenido a RTP Maker</h1>
            <h5>Ultimos RTP's Realizados</h5>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Nombre RTP</th>
                    <th scope="col">Proyecto</th>
                    <th scope="col">Acciones Rapidas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">24/04/2024</th>
                    <td>Emisor Inbursa 20024564101</td>
                    <td>EGM2002456</td>
                    <td>
                        <button type="button" class="btn btn-warning">Editar</button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">23/04/2024</th>
                    <td>Emisor Inbursa 20024564101</td>
                    <td>EGM2002456</td>
                    <td>
                        <button type="button" class="btn btn-warning">Editar</button>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">22/04/2024</th>
                    <td>Emisor Inbursa 20024564101</td>
                    <td>EGM2002456</td>
                    <td>
                        <button type="button" class="btn btn-warning">Editar</button>
                    </td>
                    </tr>
                </tbody>
                </table>
        </>
      
    )
  }
}

export default RTP