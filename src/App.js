import React from 'react'
import store from './store'
import { Provider } from 'react-redux'

// Components
import Jugadores from './components/Jugadores.jsx'
import EquipoSeleccionado from './components/EquipoSeleccionado'

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Jugadores</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
