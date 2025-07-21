// Importamos React y el hook useState para manejar estado
import React, { useState } from 'react';

// Importamos los componentes que vamos a usar desde MUI
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Box
} from '@mui/material';

export default function App() {
  // Estado para mostrar u ocultar el mensaje (snackbar)
  const [open, setOpen] = useState(false);

  // Al hacer clic en el botón, mostramos el mensaje
  const handleClick = () => {
    setOpen(true);
  };

  // Al cerrar el mensaje (automáticamente o manualmente)
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // Box es como un div mejorado que permite aplicar estilos con la prop "sx"
    <Box
      sx={{
        width: '100vw',               // Ancho completo de la ventana del navegador
        height: '100vh',              // Alto completo de la ventana
        display: 'flex',              // Activamos Flexbox
        justifyContent: 'center',     // Centramos horizontalmente
        alignItems: 'center',         // Centramos verticalmente
        backgroundColor: '#f0f0f0',   // Fondo gris clarito
        margin: 0,
        padding: 0
      }}
    >
      {/* Tarjeta de perfil con sombra y bordes redondeados */}
      <Card
        sx={{
          maxWidth: 345,     // Ancho máximo de la tarjeta
          boxShadow: 6,      // Sombra para dar profundidad
          borderRadius: 3,   // Bordes redondeados
          p: 2               // Padding interno
        }}
      >
        {/* Imagen en la parte superior de la tarjeta */}
        <CardMedia
          component="img"
          height="200"
          image="/foto-card.png" // La imagen debe estar en la carpeta "public", la podéis cambiar
          alt="Foto de perfil"
        />

        {/* Contenido textual de la tarjeta, que podéis personalizar */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Miss Material 💥
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aprendiendo React con Material UI. Esta tarjeta es parte de la práctica para entender cómo funciona cada componente.
          </Typography>
        </CardContent>

        {/* Botón que muestra el mensaje cuando se hace clic */}
        <Button
          variant="contained"     // Botón con fondo sólido
          color="primary"         // Color primario del tema
          onClick={handleClick}   // Al hacer clic, se muestra el mensaje
          sx={{ m: 2 }}           // Margen alrededor del botón
        >
          Mostrar mensaje
        </Button>

        {/* Snackbar: mensaje flotante temporal que aparece abajo */}
        <Snackbar
          open={open}                 // Se muestra si "open" es true
          autoHideDuration={3000}     // Se cierra automáticamente en 3 segundos
          onClose={handleClose}       // También puede cerrarse manualmente
          message="¡Hola desde MUI! 💌"  // Texto que se muestra
        />
      </Card>
    </Box>
  );
}
