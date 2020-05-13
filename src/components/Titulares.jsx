import React from 'react'
import {connect} from 'react-redux'

const Titulares = ({titulares}) => (
  <section className="contenedor-equipo">
    <h2>
      Titulares
    </h2>
    <div className="contenedor-jugadores titulares">
    {
      titulares.map(item => (
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
  titulares: state.titulares
})

const mapDispatchToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps) (Titulares)