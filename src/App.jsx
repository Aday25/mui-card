// Importamos React
import React from 'react';
// Importamos el componente de la tarjeta
import ProfileCard from './components/ProfileCard';

// Función principal de la app
function App() {
  // Renderizamos solo la tarjeta, que ya está estilizada internamente en ProfileCard
  return <ProfileCard />;
}

// Exportamos el componente App como el punto de entrada de la aplicación
export default App;