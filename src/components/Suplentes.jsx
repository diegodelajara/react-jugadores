import React from 'react'
import {connect} from 'react-redux'

const Suplentes = ({suplentes}) => (
  <section className="contenedor-equipo">
    <h2>
      Suplentes
    </h2>
    <div className="contenedor-jugadores">
    {
      suplentes.map(item => (
        <article className="jugador" key={item.id}>
          <div className="avatar">
            <img
              src={item.avatar}
              alt={item.nombre}
              />
          </div>
          <div className="nombre">{item.nombre}</div>
        </article>
      ))
    }
    </div>
  </section>
)

const mapStateToProps = state => ({
  suplentes: state.suplentes
})

const mapDispatchToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps) (Suplentes)