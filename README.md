# Aprendiendo JavaScript - Ejercicios Prácticos

Repositorio de ejercicios prácticos realizados durante el curso [JavaScript desde cero](https://www.youtube.com/playlist?list=PLvqjC6Mb56FS1fU02gCqp3SgS7IjQSHpI) de **Jon Mircha**.

## Ejercicios

| # | Ejercicio | Descripción |
|---|-----------|-------------|
| 1 | **Reloj Digital y Alarma Sonora** | Reloj en tiempo real con opciones de iniciar/detener y alarma programada |
| 2 | **Atajos de Teclado** | Juego interactivo controlado con teclas del teclado (flechas) |
| 3 | **Countdown** | Temporalizador regresivo hacia una fecha objetivo |
| 4 | **Responsive JavaScript** | Contenido dinámico según el tamaño de pantalla (YouTube, Google Maps) |
| 5 | **Responsive Tester** | Herramienta para probar URLs en diferentes resoluciones |
| 6 | **User Device Detection** | Detección de dispositivo y navegador mediante User Agent |
| 7 | **Internet Detection** | Monitoreo de conexión a internet (online/offline) |
| 8 | **Webcam Detection** | Captura de video y foto desde la cámara web |
| 9 | **Geolocation Detection** | Obtención de coordenadas geográficas del usuario |
| 10 | **Find Filter** | Galería de imágenes con filtro de búsqueda en tiempo real |
| 11 | **Digital Lottery** | Sorteo aleatorio de tecnologías |
| 12 | **Responsive Slider** | Carrusel de imágenes con navegación |
| 13 | **ScrollSpy** | Navegación activa basada en la posición del scroll |
| 14 | **Intelligent Video** | Reproducción automática de video al hacerse visible (IntersectionObserver) |
| 15 | **HTML5 Form Validation** | Formulario de contacto con validación en tiempo real |
| 16 | **Voice Reader** | Síntesis de voz (Text-to-Speech) con selección de idioma |

## Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3 / SCSS** - Estilos con arquitectura 7-1, glassmorphism y dark mode
- **JavaScript (ES6+)** - Módulos ES, APIs del navegador

### APIs del navegador exploradas

- Geolocation API
- MediaDevices (Webcam)
- SpeechSynthesis API
- IntersectionObserver
- matchMedia
- localStorage
- Canvas API

## Cómo ejecutar

1. Clonar el repositorio
2. Abrir `view/view.html` en el navegador

Para la galería del ejercicio 10, iniciar el servidor local:

```bash
node server/galleryServer.mjs
```

Para recompilar los estilos SCSS:

```bash
npx sass view/scss/style.scss view/scss/style.css --no-source-map
```

## Estructura del proyecto

```
├── components/         # Módulos JavaScript (un archivo por ejercicio)
├── helpers/            # Funciones auxiliares
├── utils/              # Utilidades compartidas
├── const/              # Constantes globales
├── model/              # Modelos (placeholder)
├── controller/         # Controladores (placeholder)
├── server/             # Servidor Node.js para la galería
├── view/
│   ├── view.html       # Página principal (SPA)
│   ├── view.mjs        # Punto de entrada JavaScript
│   └── scss/           # Estilos SCSS compilados
└── public/assets/      # Recursos (audio, video, SVG)
```

## Créditos

Curso impartido por [Jon Mircha](https://www.youtube.com/c/JonMircha).
