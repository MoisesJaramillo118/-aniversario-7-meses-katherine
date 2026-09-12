# 💖 7 Meses de Nuestro Amor - Página de Aniversario Moderna

Una elegante página web de aniversario creada con **Astro y React**, siguiendo las tendencias de diseño de sitios premiados en Awwwards, godly.design y 21st.dev.

## ✨ Características

- **Diseño moderno y profesional** inspirado en sitios web premiados
- **Animaciones suaves** con Framer Motion (transiciones, efectos de escala, flotación)
- **Slideshow interactivo** con efecto Ken Burns y navegación intuitiva
- **Mensajes románticos** presentados en tarjetas elegantes y responsivas
- **Control de audio** para reproducir/pausar la canción "Iris" de Goo Goo Dolls (versión en español)
- **Elementos decorativos animados** en el fondo inspirados en diseños modernos
- **Totalmente responsive** - se ve perfecto en móviles, tablets y escritorio
- **Optimizado para rendimiento** con carga diferida y animaciones eficientes
- **Sin la palabra "amante"** como se solicitó

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build)** - Framework moderno para sitios web rápidos
- **[React](https://reactjs.org)** - Para componentes interactivos y animaciones
- **[Framer Motion](https://www.framer.com/motion/)** - Para animaciones fluidas y profesionales
- **CSS3** con variables y gradientes modernos
- **Tipografía premium**: Playfair Display y Poppins de Google Fonts

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🚀 Instalación y Uso Local

1. **Clonar o descargar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd anniversario-7-meres-react-astro
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Agregar tus recursos multimedia**
   - Coloca tus fotos en el directorio `public/images/` (nombre sugerido: `whatsapp-1.jpg`, `whatsapp-2.jpg`, etc.)
   - Coloca el audio de "Iris" en `public/audio/` como `iris-goo-goo-dolls-spanish.mp3`
   - (Opcional) Agrega un favicon en `public/favicon.svg`

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:4321`

5. **Construir para producción**
   ```bash
   npm run build
   ```
   Los archivos generados estarán en el directorio `dist/`

## ☁️ Despliegue en GitHub Pages

1. **Crear un repositorio** en GitHub (ej: `aniversario-7-meses-katherine`)
2. **Subir todo el proyecto** al repositorio
3. **Habilitar GitHub Pages**:
   - Ve a Settings → Pages
   - En "Source", selecciona la rama `gh-pages`
   - O usa una acción de GitHub para desplegar automáticamente desde la rama `main`

### Despliegue Automático con GitHub Actions (Recomendado)

Astro incluye una acción oficial para GitHub Pages. Crea este archivo:
`.github/workflows/deploy.yml`

```yaml
name: Deploy Astro site to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📁 Estructura del Proyecto

```
aniversario-7-meres-react-astro/
├── public/                 # Archivos estáticos (imágenes, audio, favicon)
│   ├── images/            # Tus fotos de aniversario
│   ├── audio/             # Archivo de audio "Iris"
│   └── favicon.svg        # Icono del sitio
├── src/
│   ├── components/        # Componentes de React
│   │   ├── AudioController.tsx
│   │   ├── DecorativeElements.tsx
│   │   ├── MessageCards.tsx
│   │   ├── Slideshow.tsx
│   │   └── TitleAnimation.tsx
│   ├── pages/             # Páginas de Astro
│   │   └── index.astro    # Página principal
│   └── styles/            # Estilos CSS
│       └── global.css
├── package.json           # Dependencias y scripts
├── astro.config.mjs       # Configuración de Astro
└── README.md              # Este archivo
```

## 🎨 Personalización

### Cambiar Mensajes
Edita el archivo `src/components/MessageCards.tsx` para modificar los textos románticos.

### Cambiar Fotos
1. Agrega tus imágenes a `public/images/`
2. Actualiza el array `images` en `src/components/Slideshow.tsx` con las rutas correctas
   Ejemplo: `/images/tu-foto.jpg`

### Cambiar Audio
1. Coloca tu archivo de audio en `public/audio/`
2. Asegúrate de que el nombre coincida con el referenciado en `src/pages/index.astro`
   Actualmente busca: `/audio/iris-goo-goo-dolls-spanish.mp3`

### Ajustar Animaciones
- **Velocidad del slideshow**: Modifica el intervalo en `useEffect` del componente Slideshow (currently 6000ms = 6 segundos)
- **Intensidad de las animaciones**: Ajusta los valores en los componentes DecorativeElements y otros

## 💡 Inspiración de Diseño

Este sitio se inspiró en:
- [godly.design](https://godly.design/) - Por su enfoque en diseños premiados y minimalistas elegantes
- [www.awwwards.com](https://www.awwwards.com/) - Por las tendencias actuales en interacciones y animaciones web
- [21st.dev](https://21st.dev/) - Por componentes modernos y efectos visuales sofisticados

## ❤️ Nota Importante

Esta página fue creada siguiendo tus especificaciones específicas:
- No se utiliza la palabra "amante" en ningún lugar
- Se incluyen los términos cariñosos que mencionaste: "mi amorcito", "mi niña hermosa", "mi eternidad"
- El diseño evita elementos cluttered y se centra en la elegancia y la legibilidad
- Las animaciones están diseñadas para ser sutiles y mejoradoras de la experiencia, no distractoras

¡Esperamos que esta página sea un hermoso recuerdo de sus 7 meses juntos! 💖

---

*Creado con ❤️ usando Astro, React y Framer Motion*