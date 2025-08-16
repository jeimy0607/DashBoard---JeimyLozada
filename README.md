# Dashboard - GestionDigital

Este proyecto consiste en el desarrollo de un "dashboard administrativo responsivo", diseñado para un sistema de gestión de inventario.  
El dashboard permite visualizar información clave como productos, ventas, usuarios, inventario reciente y un gráfico de ventas semanales de manera clara, ordenada e interactiva.

---

# Tecnologías usadas

- **HTML5** → para la estructura del proyecto.  
- **CSS3** → para la maquetación responsiva, estilos y diseño avanzado.  
- **JavaScript** → para la interactividad del menú lateral que se colapsa.  

---

# Vistas del proyecto

El diseño es **totalmente responsivo** y se adapta a distintos dispositivos:

- **Versión Computador**  
  ![Computador](./evidencias/Computador-1280px.png)

- **Versión Tablet**  
  ![Tablet](./evidencias/Tablet-768px.png)

- **Versión Celular**  
  ![Celular](./evidencias/Celular-360px.png)

  - **Barra de navegación al oprimir botón de navegación**  
  ![Barra en tablet y celular](./evidencias/barraNav-CelularTablet.png)


*(Las imágenes se encuentran en la carpeta `evidencias` del proyecto).*

---

# Decisiones de diseño

- Se utilizó una paleta de colores suaves para lograr una interfaz agradable y de fácil lectura.  
- La maquetación principal se hizo con CSS Grid (distribución de header, main, sidebar y footer) y dentro de los componentes se aplicó Flexbox para alinear y distribuir elementos.  
- Se añadieron transiciones y efectos hover para mejorar la experiencia de usuario.  
- El **sidebar** se ubica en el lado derecho y es colapsable en pantallas pequeñas con un botón tipo *hamburguesa*.  
- Se agregaron tarjetas de resumen, una tabla de datos y un gráfico simulado con barras para cumplir con los requisitos de componentes principales de un dashboard moderno.  

---

# Accesibilidad

- Uso de etiquetas semánticas de HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`).  
- Inclusión de roles ARIA (`role="navigation"`, `role="main"`, `role="banner"`, etc.) para mejorar la compatibilidad con lectores de pantalla.  
- El botón de menú hamburguesa incluye atributos `aria-label` y `aria-expanded` para describir su función.  
- Se verificó el contraste de colores para asegurar buena legibilidad.  
- Los enlaces y botones tienen estados hover visibles para mejorar la navegación por teclado.  

---

# Autor

Proyecto desarrollado por: Jeimy Lozada  
Año: 2025

