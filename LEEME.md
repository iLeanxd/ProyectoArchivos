# ArchivoLab — Solo persona 1

Esta entrega corresponde únicamente a la **estructura, diseño general, navegación e integración** de la persona 1.

La actualización visual usa una composición inspirada en fichas de archivo: fondo de papel, acento naranja, tipografía editorial, cabecera horizontal e ilustración de carpetas hecha con CSS. Los nombres completos del equipo aparecen en una lista de dos columnas.

Conserva el curso **Organización de Archivos**, el profesor **Max Castro** y los nombres completos de los seis integrantes. La página tiene los espacios donde se colocarán los componentes de los compañeros.

## Aplicar este cambio en tu carpeta proyecto-personas

Para actualizar el diseño que ya tienes, reemplaza únicamente estos tres archivos en tu proyecto:

1. `src/pages/Home.jsx`
2. `src/components/Navbar.jsx`
3. `src/styles/main.css`

Copia cada archivo a su ruta correspondiente. **Conserva tu carpeta `src` y su `main.jsx`**; no reemplaces la carpeta completa. `App.jsx`, `main.jsx`, `Icono.jsx` y los archivos de configuración se incluyen como respaldo del proyecto completo, pero no necesitan cambios para este rediseño. Los componentes de las personas 2 y 3 se conservan.

Abre una terminal en **`proyecto-personas`**, donde está tu `package.json`, y ejecuta:

```bash
npm run dev
```

Abre el enlace que indique Vite. Esta modificación visual no añade dependencias.

## Reparto respetado

| Persona | Responsabilidad |
| --- | --- |
| 1 | Diseño general, navegación, estructura, información académica, adaptación de la estructura a pantallas e integración final. |
| 2 | Su buscador y su tabla de personas. |
| 3 | Sus formularios y su modal de edición. |
| Equipo del backend | Conexión con SQL y operaciones reales sobre los registros. |

Este paquete no contiene el panel de demostración de la entrega anterior ni implementaciones de búsqueda, tablas, formularios o gestión de registros. Las tarjetas “Pendiente de integración” son únicamente espacios de la estructura.

## Ver la estructura

Abre `ArchivoLab_Vista_Previa.html` con doble clic. Verás la estructura y podrás utilizar los enlaces de navegación. Los espacios de tus compañeros seguirán reservados hasta integrar sus componentes.

## Ejecutar el proyecto completo

El paquete conserva el arranque completo de React para poder comprobar la estructura en localhost. Extrae el ZIP, abre la carpeta `Persona1_Estructura` en VS Code y ejecuta desde donde está `package.json`:

```bash
npm install
npm run dev
```

Usa Node.js 22.12 o posterior, según la configuración incluida. Abre la dirección exacta que aparezca en la terminal; el puerto puede variar si hay otro servidor abierto. Puedes detener el servidor con `Ctrl + C`.

Para abrir un archivo con doble clic, utiliza `ArchivoLab_Vista_Previa.html`. El `index.html` de la raíz se utiliza con Vite.

## Archivos de referencia del paquete completo

Esta tabla explica los archivos incluidos. Para aplicar este rediseño a tu proyecto existente, reemplaza solamente los tres archivos indicados al principio.

| Archivo | Función |
| --- | --- |
| `src/App.jsx` | Entrada de la estructura e importación de estilos. |
| `src/pages/Home.jsx` | Encabezado, áreas reservadas, profesor, equipo y pie de página. |
| `src/components/Navbar.jsx` | Navegación y presentación del curso. |
| `src/components/Icono.jsx` | Iconos de la estructura. |
| `src/styles/main.css` | Diseño general y distribución adaptable. |
| `src/main.jsx` | Arranque de React; se incluye para comprobar el montaje correcto. |

Si `main.jsx` ya contiene configuración adicional que su proyecto necesita, incorpora el montaje de `App` conservando esa configuración. El `index.html` debe tener `<div id="root"></div>` y cargar `/src/main.jsx`; hay un ejemplo completo en el paquete.

**Si copiaste la versión anterior que te entregué, retira únicamente `src/components/PanelDemo.jsx` de aquella entrega.** `Home.jsx` ya no lo importa. Conserva los archivos que hayan escrito tus compañeros.

Los archivos raíz `package.json`, `package-lock.json` y `vite.config.js` permiten ejecutar la copia completa. Para incorporar solo el diseño al repositorio del equipo, no hace falta reemplazar sus dependencias.

## Cómo se integrarán las otras partes

`Home` recibe estas props, reservadas para el trabajo del equipo:

| Prop de Home | Contenido que recibirá |
| --- | --- |
| `buscador` | El componente de búsqueda de la persona 2. |
| `tablaPersonas` | La tabla de la persona 2, con las props que haya definido. |
| `formularioPersona` | El formulario de la persona 3. |
| `modalEditar` | El modal de edición de la persona 3. |

Cuando la persona 1 reciba esos componentes, los importará en `App.jsx` y los pasará a `Home`. Cada componente reemplaza su espacio reservado. Sus datos y callbacks se conectarán según el acuerdo del equipo; esta entrega solo define dónde aparecerán.

No es necesario crear archivos vacíos de tus compañeros para que tu parte abra correctamente. Los comentarios de `Home.jsx` indican a quién corresponde cada espacio.

## Subir únicamente tu parte

Después de revisar el resultado dentro de su proyecto:

```bash
git add src/pages/Home.jsx src/components/Navbar.jsx src/styles/main.css
git diff --cached --stat
git commit -m "Redisenar la estructura de persona 1"
git push -u origin persona1-estructura
```

Si modificaste el arranque, añade también esos cambios con `git add src/main.jsx index.html`. Si el archivo `PanelDemo.jsx` de mi entrega anterior había sido subido, añade su eliminación con `git add -u src/components/PanelDemo.jsx`. Revisa los archivos preparados antes de confirmar el commit.

## Comprobación de esta entrega

Se comprueba la compilación y la visualización de la estructura en computadora y celular, con los seis integrantes, tres espacios de integración y navegación por las secciones. Las pruebas de este paquete no incluyen funciones que corresponden a las personas 2 y 3.
