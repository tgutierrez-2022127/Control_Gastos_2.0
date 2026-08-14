# Control de Gastos - Fundación Kinal

##  Descripción del Proyecto

Sistema de control de gastos para los clientes de Fundación Kinal. La aplicación permite a los usuarios gestionar sus finanzas personales, categorizar gastos y recibir alertas cuando se acercan a su límite presupuestario.

##  Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipado estático
- **Express** - Framework web
- **PostgreSQL** - Base de datos relacional
- **TypeORM** - ORM para TypeScript
- **JWT** - Autenticación segura
- **bcrypt** - Encriptación de contraseñas

### Frontend
- **Angular 17+** - Framework frontend
- **TypeScript** - Tipado estático
- **SCSS** - Estilos avanzados
- **Font Awesome** - Iconos
- **Reactive Forms** - Formularios reactivos

##  Estructura del Proyecto
Control_de_Gastos/
├── backend/
│ ├── src/
│ │ ├── config/ # Configuración de base de datos
│ │ ├── controllers/ # Controladores de la API
│ │ ├── entities/ # Entidades de TypeORM
│ │ ├── middlewares/ # Middlewares de autenticación
│ │ ├── routes/ # Rutas de la API
│ │ ├── services/ # Lógica de negocio
│ │ └── index.ts # Punto de entrada
│ ├── .env # Variables de entorno
│ ├── package.json
│ └── tsconfig.json
├── frontend/
│ └── control-gastos-frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── auth/ # Módulo de autenticación
│ │ │ ├── interceptors/ # Interceptores HTTP
│ │ │ ├── models/ # Modelos de datos
│ │ │ └── app.component.ts # Componente principal
│ │ ├── styles.scss # Estilos globales
│ │ └── index.html
│ ├── angular.json
│ └── package.json
├── docs/ # Documentación
├── scripts/ # Scripts de utilidad
└── README.md


##  Instalación y Configuración

### Prerrequisitos

- Node.js (v18 o superior)
- pnpm (v8 o superior)
- PostgreSQL (v14 o superior)
- Angular CLI (v17 o superior)

### 1. Clonar el repositorio

```bash
git clone https://github.com/tgutierrez-2022127/Control_de_Gastos.git
cd Control_de_Gastos

 
