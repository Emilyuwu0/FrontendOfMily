# 🤍 Css: 

Las siglas CSS (Cascading Style Sheets) significan «Hojas de estilo en cascada» y parten de un concepto simple pero muy potente: aplicar estilos (colores, formas, márgenes, etc...) a uno o varios documentos (generalmente documentos HTML, páginas webs) de forma automática y masiva.

Se le denomina estilos en cascada porque se lee, procesa y aplica el código desde arriba hacia abajo (siguiendo patrones como herencia o cascada que trataremos más adelante) y en el caso de existir ambigüedad (código que se contradice), se siguen una serie de normas para resolver dicha ambigüedad.


## 🔹 Responsive: 
Cuando utilizamos el término “responsive” (adaptable), nos referimos principalmente a “responsive design” (diseño web adaptable). Esto significa hacer que un sitio web sea accesible y adaptable en todos los devices: tabletas, smartphones, etc

```
@media (min-width: 768px) and (max-width: 1020px) {
   
}

@media (min-width: 1024px) and (max-width: 1200px) {
  
}

@media (min-width: 1210px) and (max-width: 1290px) {
  
}

@media (min-width: 1300px) and (max-width: 1499px) {
  
}

@media (min-width: 1500px) and (max-width: 1670px) {

}

@media (min-width: 1700px) and (max-width: 2800px) {
 
}

```

🔰 https://blogthinkbig.com/generadores-css-escribir-codigo 



## 🔹 Marking Layouts:
```css

 justify-content:

- flex-start: Alinea elementos al lado izquierdo del contenedor.
- flex-end: Alinea elementos al lado derecho del contenedor.
- center: Alinea elementos en el centro del contenedor.
- space-between: Muestra elementos con la misma distancia entre ellos.
- space-around: Muestra elementos con la misma separación alrededor de ellos.

 align-items:

- flex-start: Alinea elementos a la parte superior del contenedor.
- flex-end: Alinea elementos a la parte inferior del contenedor.
- center: Alinea elementos en el centro (verticalmente hablando) del contenedor.
- baseline: Muestra elementos en la línea base del contenedor
- stretch: Elementos se estiran para ajustarse al contenedor.

flex-direction:

- row: Elementos son colocados en la misma dirección del texto.
- row-reverse: Elementos son colocados en la dirección opuesta al texto.
- column: Elementos se colocan de arriba hacia abajo.
- column-reverse: Elementos se colocan de abajo hacia arriba.

Order:
- La propiedad CSS order especifica el orden utilizado para disponer los elementos en su contenedor flexible. Los elementos estarán dispuestos en orden ascendente según el valor de order.

flex-wrap, la cual acepta los siguientes valores:

- nowrap: Cada elemento se ajusta en una sola línea.
- wrap: los elementos se envuelven alrededor de líneas adicionales.
- wrap-reverse: Los elementos se envuelven alrededor de líneas adicionales en reversa.

align-content:

- flex-start: Las líneas se posicionan en la parte superior del contenedor.
- flex-end: Las líneas se posicionan en la parte inferior del contenedor.
- center: Las líneas se posicionan en el centro (verticalmente hablando) del contenedor.
- space-between: Las líneas se muestran con la misma distancia entre ellas.
- space-around: Las líneas se muestran con la misma separación alrededor de ellas.
- stretch: Las líneas se estiran para ajustarse al contenedor.

```
