
# 🎯 Proyecto Final - 999198242

---

## 📜 Objetivo general
Proyecto final de la licenciatura de Desarrollo Frontend simulando crear una tienda online con un panel de administración para gestionar usuarios y productos traídos desde una API externa. 
Está gestionado con **React** y **Vite**, utilizando `react-router-dom` para el manejo de rutas y componentes organizados de forma modular.

---

## 🚀 Instalación y configuración inicial

###  Crear proyecto con Vite
```bash
npm create vite@latest
elegi React
seleccioné Javascript
 npm install
 npm run dev
 Borré los componentes preinstalados, dejando solamente main.jsx
Creamos los componentes base: Footer, Header, Layout, Home, NotFound y RouterApp en clases.
Para crear el RouterApp instalé la dependencia "react-router-dom".



##⚛ Funcionalidades implementadas
🛍 Lista de productos obtenidos desde la FakeStore API.

🔍 Motor de búsqueda con evento onChange para filtrar productos mientras el usuario escribe.

🗑 Borrar y editar productos.

🧠 UserContext para gestionar el estado global del usuario y acceder a los datos desde cualquier componente.

⚡ Manejo de estados con Hooks de React.

🎨 Interfaz sencilla y de fácil uso, editada con CSS puro y nativo.

### ⚙️ Implementación de UserContext
1. Creé el archivo `UserContext.jsx` donde defino:
   - Estado global del usuario
   - Funciones para **login**, **logout** y **registro** de datos
2. Envolví la aplicación con `<UserContext.Provider>` en `main.jsx`
3. Utilizo el hook `useContext(UserContext)` para acceder a los datos y funciones desde cualquier componente.

TECNOLOGÍAS UTILIZADAS:
React (creado con Vite)
React Router DOM para navegación SPA
GoogleFonts para tipografías.
Fake Store API como fuente de datos inicial
BoxIcons para iconos.

---

##  Instrucciones para ejecutar el proyecto localmente

1. **Clonar el repositorio**
```bash
git clone https://github.com/AnyuEscobar/proyecto-frontend.git

2. **Ingresar en el directorio del proyecto**
cd proyecto-frontend

3. **Instalar dependencias**
npm install

4. **Iniciar el servidor de desarrollo**
npm run dev

5. **Abrir la aplicación en el navegador**
Accedé a http://localhost:5173 — si Vite usa otro puerto, te lo indicará en la terminal.
