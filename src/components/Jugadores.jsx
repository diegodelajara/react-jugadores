import React from 'react'
import { connect } from 'react-redux'


const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
  <div className="contenedor-jugadores">
    {
      jugadores.map(item => (
        <article className="jugador" key={item.id}>
          <div className="avatar">
            <img
              src={item.avatar}
              alt={item.nombre}
            />
          </div>
          <div className="nombre">{item.nombre}</div>  
          <div className="actionButtons">
            <button onClick={() => agregarTitular(item)}>Titular</button>
            <button onClick={() => agregarSuplente(item)}>Suplente</button>
          </div>
        </article>
      ))
    }
  </div>
)
// const mapStateToProps = state => ({})
const mapStateToProps = state => ({
  jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador) {
    dispatch({
      type: 'AGREGAR_TITULAR',
      jugador
    })
  },
  agregarSuplente(suplente) {
    dispatch({
      type: 'AGREGAR_SUPLENTE',
      suplente
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps) (Jugadores)
