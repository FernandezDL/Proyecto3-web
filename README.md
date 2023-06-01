# Proyecto 3 - Sistemas y Tecnologías Web

## Contenidos
- [Descripción]((https://github.com/FernandezDL/Proyecto3-web#descripci%C3%B3n))
- [Tecnologías usadas](https://github.com/FernandezDL/Proyecto3-web#tecnolog%C3%ADas-usadas)
   - [JavaScript](https://github.com/FernandezDL/Proyecto3-web#-javascript)
   - [React](https://github.com/FernandezDL/Proyecto3-web#-react)
   - [CSS](https://github.com/FernandezDL/Proyecto3-web#-css)
   - [HTML](https://github.com/FernandezDL/Proyecto3-web#-html)
- [Comandos importantes](https://github.com/FernandezDL/Proyecto3-web#comandos-importantes)
   - [Preparación]
   - [Compilación del proyecto]
- [Estructura](https://github.com/FernandezDL/Proyecto3-web#estructura)
- [Proyecto en servidor](https://github.com/FernandezDL/Proyecto3-web#proyecto-en-servidor)
- [Soporte](https://github.com/FernandezDL/Proyecto3-web#soporte)
- [Autores](https://github.com/FernandezDL/Proyecto3-web#autora)

## Descripción
Tener un portafolio personal es una parte importante de la carta de presentación de cualquier profesional, con él se muestra qué se ha hecho a lo largo de los años y como se ha evolucionado como desarrollador en las distintas disciplinas de esta ciencia.

Dentro de este proyecto se está creando mi portafolio personal con los proyectos que he realizado hasta la fecha :)

## Tecnologías usadas
### -JavaScript
Siendo un lenguaje de programación ampliamente utilizado en el desarrollo Web, [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) es un lenguaje de alto nivel que se ejecuta directamente en el entorno del cliente sin necesidad de que se haga una compilación previa del proyecto, permitiendo realizar aplicaciones interactivas y dinámicas desde el lado del cliente.

### -React
Siendo [React](https://es.react.dev/) una biblioteca de JavaScript, está se utiliza para realizar la construcción de interfaces de usuario interactivas y reutilizables. 

Fue desarrollada por [Facebook](https://es.wikipedia.org/wiki/Facebook) y actualmente se posiciona como una de las bibliotecas más populares para el desarrollo de aplicaciones web.

### -CSS
Por sus siglas en inglés, el Cascading Style Sheets, o también llamado [CSS](https://developer.mozilla.org/es/docs/Web/CSS), es un lenguaje de estilos que permite definir el aspecto y la apariencia visual que tienen los elementos HTML que componen el proyecto que se está trabajando.

### -HTML
[HTML](https://developer.mozilla.org/es/docs/Web/HTML) (HyperText Markup Language) es un lenguaje estándar que se utiliza para crear páginas web con el cual se definen las estructuras y los elementos que componen la interfaz de usuario. Dentro del proyecto, HTML se utiliza para marcar el contenido de la aplicación y crear los elementos a utilizar.

## Comandos importantes
### Preparación
Entre los pasos fundamentales para poder usar este código es tener instalado React y todas las dependencias que necesita. Sin embargo, algunas veces el tener tantas dependencias pueda provocar que se nos confundan y una puede perderse por ahí y que no tengamos bien instaladas las versiones que son.

Dentro del archivo **package.json** que se encuentra en el proyecto se encuentra una lista de todas las dependencias y las respectivas versiones que se necesitan para utilizar el proyecto. Cuando se ejecuta el comando _npm install_ en el directorio raíz del proyecto se busca dicha lista de dependencias y se pasa a descargar e instalar las dependencias correspondientes en un directorio denominda 'node_modules'

Es importante recalcar el hecho de que _npm install_ revisa e instala las dependencias que se utilicen por otras dependencias, haciendo este proceso de forma recursiva y asegurando que se intalen las dependencias necesarias y el proyecto funcione de manera correcta.
```bash
npm intall
```

### Compilación del proyecto
En este caso, dentro de las configuraciones que se encuentran en el package.json se tiene el script _npm start_ el cual está configurado para abrir un servidor local usando Webpack en modo _"caliente"_ el cual se refiere a que, cuando se guarda algún cambio nuevo en los archivos del proyecto, este compilará y mostrará automáticamente la nueva versión del proyecto en dicho servidor.
```bash
npm start
```

Por otra parte, para el paso final, cuando se quiere producir el Bundle usando, en este caso, Webpack como modo de producción, se utiliza el siguiente comando.
```bash
npm run build
```

En este caso "build" es el nombre del script configurado dentro del package.json del proyecto, en el cual se está especificando que se use Webpack para combinar todos los archivos del proyecto en un solo archivo optimizado. Este archivo será personalizado según la configuración del 'webpack.config.js', tomando en cuenta los puntos de entrada, las reglas de carga de archivos, los complementos y más configuraciones

## Estructura
### fuentes
Aquí se encuentran los archivos [.ttf](https://www.fileviewpro.com/es/file-extension-ttf/) y [.otf](https://www.reviversoft.com/es/file-extensions/otf) que se usan a lo largo del proyecto

### imagenes
Aquí se encuentran todos los archivos [.png](https://es.wikipedia.org/wiki/Portable_Network_Graphics) que se usan a lo largo del proyecto

### src
- components
  - Navbar.css
  - Navbar.js
- pages
  - About.css
  - About.js
  - Contact.css
  - Contact.js
  - Home.css
  - Home.js
  - Portfolio.css
  - Portfolio.js
- App.css
- App.js
- index.css
- index.html
- index.js

## Proyecto en Servidor
Para acceder al portafolio haz click [aquí](https://portafolio-dfernandez.web.app/)

## Soporte
Para cualquier duda relacionada con el malfuncionamiento de uno o más archivos del proyecto por favor comunicarse con la creadora al correo:

-Diana Fernández 

fer21747@uvg.edu.gt

## Autora
Diana Lucía Fernández Villatoro - 21747
