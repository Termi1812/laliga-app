# LaLiga App 🏆

Aplicación web desarrollada en **Angular** para consultar información en tiempo real de LaLiga EA Sports. Muestra la clasificación, próximos partidos, resultados y fichas detalladas de cada equipo.

## Demo

🌐 [laliga-app-production.up.railway.app](https://laliga-app-production.up.railway.app)

## Características

- Clasificación en tiempo real con estadísticas completas
- Próximos partidos y resultados de la jornada
- Ficha detallada de cada equipo con estadísticas y partidos
- Diseño responsive adaptado a móvil y escritorio
- Animaciones y microinteracciones
- Datos actualizados automáticamente cada día a las 6:00 AM

## Tecnologías

- **Angular 21** — framework frontend
- **TypeScript** — lenguaje principal
- **CSS3** — estilos y animaciones
- **Railway** — plataforma de despliegue

## Requisitos previos

- Node.js 18+
- Angular CLI 21+

```bash
npm install -g @angular/cli
```

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Termi1812/laliga-app.git

# Entrar en la carpeta
cd laliga-app

# Instalar dependencias
npm install
```

## Configuración

La app consume la [API de LaLiga](https://github.com/Termi1812/API_Futbol) desarrollada en Spring Boot. Configura los entornos en:

**Desarrollo** (`src/environments/environment.ts`):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

**Producción** (`src/environments/environment.prod.ts`):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://apifutbol-production.up.railway.app/api'
};
```

## Ejecución en local

```bash
# Arrancar en modo desarrollo
ng serve

# O usando el servidor Express incluido
npm run serve:local
```

La app estará disponible en `http://localhost:4200`

## Build para producción

```bash
ng build
```

Los archivos se generan en la carpeta `browser/`.

## Estructura del proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── clasificacion/       # Tabla de clasificación
│   │   ├── partidos/            # Próximos partidos y resultados
│   │   ├── equipos/             # Lista de equipos
│   │   └── equipo-detalle/      # Ficha detallada de equipo
│   ├── services/
│   │   └── api.service.ts       # Comunicación con la API
│   ├── environments/
│   │   ├── environment.ts       # Configuración desarrollo
│   │   └── environment.prod.ts  # Configuración producción
│   ├── app.routes.ts            # Definición de rutas
│   └── app.config.ts            # Configuración de la app
└── styles.css                   # Estilos globales
```

## Pantallas

| Pantalla | Ruta | Descripción |
|---|---|---|
| Clasificación | `/clasificacion` | Tabla completa de LaLiga con estadísticas |
| Partidos | `/partidos` | Próximos partidos y resultados |
| Equipos | `/equipos` | Lista de los 20 equipos |
| Ficha equipo | `/equipos/:id` | Detalle de un equipo concreto |

## Despliegue en Railway

El proyecto está configurado para desplegarse automáticamente en Railway al hacer push a la rama `master`.

El comando de inicio está configurado en `package.json`:

```json
"start": "npx serve browser/browser --listen tcp://0.0.0.0:$PORT --single"
```

## API Backend

Esta app consume la API REST desarrollada en Spring Boot. Repositorio: [API_Futbol](https://github.com/Termi1812/API_Futbol)

Los datos se sincronizan automáticamente cada día a las 6:00 AM y a las 18:00PM (hora española) con [football-data.org](https://www.football-data.org).

## Licencia

MIT