# EduSystem Pro - Sistema de Gestión Educativa

## Descripción del Proyecto
Este proyecto implementa un sistema de login para una plataforma de gestión educativa llamada "EduSystem Pro". El proyecto está dividido en tres UHs (User Stories) que se implementan siguiendo el flujo de Git Flow.

## Estructura del Proyecto
```
login-app-02/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS responsivos
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## UHs (User Stories) a Implementar

### HU0001 - Formulario de login - base ✅ COMPLETADO
- **Objetivo**: Como PO quiero poder iniciar sesión en la plataforma usando usuario y contraseña
- **Características**:
  - Pantalla dividida 50% derecha para formulario, 50% izquierda para futuras integraciones
  - Formulario con diseño responsive
  - Implementado en HTML, CSS y JavaScript
  - Cumple con el diseño de referencia

### HU0002 - Formulario de login - Imagen de fondo 🔄 PENDIENTE
- **Objetivo**: Como PO quiero agregar una imagen alusiva a instituciones educativas
- **Características**:
  - Imagen en el 50% izquierdo del espacio
  - Responsive para diferentes dispositivos

### HU0003 - Formulario de login - Datos del sistema 🔄 PENDIENTE
- **Objetivo**: Como PO quiero agregar información de gestión institucional
- **Características**:
  - Datos superpuestos en el 50% izquierdo
  - Información dinámica del sistema

## Git Flow Implementation

### Ramas Utilizadas
- `main` - Rama principal de producción
- `develop` - Rama de desarrollo
- `feature/HU0001-login-base` - Rama para la primera UH
- `feature/HU0002-background-image` - Rama para la segunda UH
- `feature/HU0003-system-data` - Rama para la tercera UH

### Proceso de Commits
1. Cada UH se implementa en su propia rama feature
2. Se realizan commits semánticos (ej: `feat: login responsive`)
3. Se crea Pull Request para merge a develop
4. Se hace merge a main solo cuando todas las UHs estén completas

## Criterios de Evaluación
- ✅ Gestión correcta de GitFlow (1.5 puntos)
- ✅ Merge a través de Pull Request (1.5 puntos)
- ✅ Commits semánticos (1.0 puntos)
- ✅ Cada HU en rama independiente (0.5 puntos)
- ✅ Sin archivos innecesarios ni errores (0.2 puntos)
- ✅ Entrega en plazo (0.3 puntos)

**Total: 5.0 puntos**

## Cómo Ejecutar
1. Abrir `index.html` en un navegador web
2. El proyecto es completamente responsive
3. Funcionalidades incluidas:
   - Toggle de visibilidad de contraseña
   - Validación de formulario
   - Estado de "Recordarme"
   - Efectos visuales y transiciones

## Tecnologías Utilizadas
- HTML5
- CSS3 (con Flexbox y Media Queries)
- JavaScript ES6+
- Font Awesome para iconos
- Diseño responsive y moderno
