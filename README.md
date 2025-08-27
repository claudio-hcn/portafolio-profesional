# 🚀Portafolio Personal

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://tu-usuario.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Sitio web personal que presenta mi experiencia, proyectos y habilidades como desarrollador Full Stack.

## 🌟 Vista Previa

![Portafolio Preview](images/preview/portfolio-preview.png)

**🔗 [Ver sitio en vivo](https://tu-usuario.github.io)**

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Personalización](#-personalización)
- [Despliegue](#-despliegue)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia con gradientes contemporáneos y animaciones suaves
- **📱 Completamente Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **🌙 Modo Oscuro**: Alternancia entre tema claro y oscuro
- **⚡ Animaciones Fluidas**: Transiciones suaves y efectos de hover interactivos
- **🧭 Navegación Intuitiva**: SPA (Single Page Application) con navegación suave
- **📧 Formulario de Contacto**: Formulario funcional para recibir mensajes
- **🚀 Efectos Visuales**: Partículas flotantes y efectos parallax sutiles
- **♿ Accesible**: Diseño que cumple con estándares de accesibilidad web
- **⚡ Optimizado**: Carga rápida sin dependencias externas

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript (Vanilla)** - Interactividad sin frameworks

### Herramientas y Servicios
- **GitHub Pages** - Hosting gratuito
- **Git** - Control de versiones
- **VS Code** - Editor de código

### Características Técnicas
- Variables CSS personalizadas
- Intersection Observer API
- CSS Animations & Transitions
- Mobile-First Responsive Design
- Cross-browser compatibility

## 📁 Estructura del Proyecto

```
mi-portafolio/
├── 📄 index.html              # Página principal
├── 📄 README.md               # Documentación
├── 🎨 css/
│   └── styles.css             # Estilos principales
├── ⚡ js/
│   └── script.js              # Lógica de interacción
├── 🖼️ images/
│   ├── profile/               # Fotos de perfil
│   ├── projects/              # Screenshots de proyectos
│   ├── icons/                 # Iconos SVG
│   └── logos/                 # Logos de tecnologías
├── 📁 assets/
│   └── cv/                    # CV descargable
└── 🌐 favicon.ico            # Icono del sitio
```

## 🚀 Instalación

### Opción 1: Clonación Directa
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-usuario.github.io.git

# Navegar al directorio
cd tu-usuario.github.io

# Abrir con un servidor local
# Opción A: Con Python
python -m http.server 8000

# Opción B: Con Node.js (live-server)
npm install -g live-server
live-server

# Opción C: Con VS Code Live Server
# Instalar extensión "Live Server" y hacer clic derecho > "Open with Live Server"
```

### Opción 2: Fork del Repositorio
1. Haz fork de este repositorio
2. Renómbralo a `tu-usuario.github.io`
3. Clona tu fork localmente
4. Personaliza el contenido
5. Haz push de los cambios

## 🎨 Personalización

### 1. Información Personal
Edita estos archivos con tu información:

**`index.html`**
```html
<!-- Cambiar información personal -->
<h1 class="hero-title">Hola, soy [Tu Nombre]</h1>
<p class="hero-subtitle">[Tu Título Profesional]</p>
<p class="hero-description">[Tu descripción personal]</p>
```

### 2. Colores y Tema
En `css/styles.css`, modifica las variables CSS:

```css
:root {
    --primary-color: #667eea;     /* Color principal */
    --secondary-color: #764ba2;   /* Color secundario */
    --accent-color: #f093fb;      /* Color de acento */
}
```

### 3. Contenido de Secciones

#### Curriculum
- Actualiza experiencia laboral en la sección `#curriculum`
- Modifica habilidades técnicas
- Añade certificaciones y educación

#### Proyectos
- Reemplaza proyectos de ejemplo con los tuyos
- Actualiza enlaces de GitHub y demos
- Cambia imágenes en `/images/projects/`

#### Contacto
- Actualiza información de contacto
- Configura formulario con tu servicio preferido (EmailJS, Formspree, etc.)

### 4. Imágenes
Reemplaza las imágenes en las carpetas correspondientes:
- `images/profile/avatar.jpg` - Tu foto de perfil (400x400px recomendado)
- `images/projects/` - Screenshots de tus proyectos (800x600px recomendado)
- `favicon.ico` - Icono de tu sitio (32x32px)

### 5. SEO y Metadatos
Actualiza las meta tags en `index.html`:
```html
<title>Tu Nombre - Portafolio Profesional</title>
<meta name="description" content="[Tu descripción profesional]">
<meta name="keywords" content="[tus, palabras, clave]">
```

## 🌐 Despliegue

### GitHub Pages (Recomendado)
1. **Crear repositorio**: `tu-usuario.github.io`
2. **Subir archivos** al repositorio
3. **Activar Pages**: Settings → Pages → Source: Deploy from branch → main
4. **Acceder**: `https://tu-usuario.github.io`

### Otros Servicios
- **Netlify**: Arrastra la carpeta del proyecto a netlify.app
- **Vercel**: Conecta el repositorio de GitHub
- **Firebase Hosting**: `firebase deploy`

## 📈 Optimizaciones Incluidas

- ✅ Imágenes optimizadas y comprimidas
- ✅ CSS y JS minificados en producción
- ✅ Lazy loading para imágenes
- ✅ Fonts optimizados
- ✅ SEO-friendly estructura HTML
- ✅ Schema markup para mejor indexación
- ✅ Progressive Web App ready

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portafolio:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Ideas para Contribuir
- 🎨 Nuevos temas de colores
- 🔧 Optimizaciones de performance
- 📱 Mejoras de responsive design
- ♿ Mejoras de accesibilidad
- 🌐 Soporte multiidioma
- ✨ Nuevas animaciones

## 🐛 Reportar Issues

Si encuentras algún problema:
1. Busca en los [issues existentes](https://github.com/tu-usuario/tu-usuario.github.io/issues)
2. Si no existe, [crea un nuevo issue](https://github.com/tu-usuario/tu-usuario.github.io/issues/new)
3. Incluye detalles del problema y pasos para reproducirlo

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

```
MIT License

Copyright (c) 2025 [Tu Nombre]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

## 🙏 Agradecimientos

- Inspiración de diseño de [Dribbble](https://dribbble.com)
- Iconos de [Lucide Icons](https://lucide.dev)
- Fuentes de [Google Fonts](https://fonts.google.com)
- Animaciones inspiradas en [Framer Motion](https://framer.com/motion)

## 📱 Contacto

¿Tienes preguntas o sugerencias? ¡Contáctame!

- 📧 **Email**: tu.email@ejemplo.com
- 💼 **LinkedIn**: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐙 **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- 🌐 **Portfolio**: [tu-usuario.github.io](https://tu-usuario.github.io)
- 📱 **Twitter**: [@tu_usuario](https://twitter.com/tu_usuario)

---

<div align="center">

**⭐ Si te gustó este proyecto, no olvides darle una estrella ⭐**

*Hecho con ❤️ por [Tu Nombre]*

</div>