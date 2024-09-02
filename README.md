# Javascript 💛

JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web

Es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

El núcleo del lenguaje JavaScript de lado del cliente consta de algunas características de programación comunes que te permiten hacer cosas como:

Almacenar valores útiles dentro de variables. En el ejemplo anterior, por ejemplo, pedimos que ingreses un nuevo nombre y luego almacenamos ese nombre en una variable llamada name.
Operaciones sobre fragmentos de texto (conocidas como "cadenas" (strings) en programación).

- https://www.w3schools.com/js/
- https://javascript.info
- https://www.javascripttutorial.net/javascript-dom/



## API
 La API Fetch proporciona una interfaz para recuperar recursos (incluso a través de la red). Es un reemplazo más potente y flexible de XMLHttpRequest .

-fetch():
El método fetch() utilizado para recuperar un recurso.

-Headers:
Representa encabezados de respuesta/solicitud, lo que le permite consultarlos y realizar diferentes acciones según los resultados.

-Request:
Representa una solicitud de recurso. 

-Response:
Representa la respuesta a una solicitud.


 Uso:

```js
async function getData() {
  const url = "https://example.org/products.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
```
```js
async getLayoffList(dataParams: {
    page?: number;
    limit?: number;
    name?: string;
  }): Promise<{ count: number; rows: LayoffsFlow[] }> {
    const authorization = JSON.parse(
      localStorage.getItem("userData") as string
    ).token;

    const { page = 1, limit = 8, name = "" } = dataParams;
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(name ? { name } : {}),
    }).toString();

    return new Promise((resolve, reject) => {
      fetch(Globalconfig.apiURL + `layoffs?${params}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authorization}`,
        },
      })
        .then(async (response) => {
          if (!response.ok) {
            // Validacion cuando se vence el token
            redirectIfTokenExpired(response);
            // f
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
          const data = await response.json();
          let newData: { count: number; rows: LayoffsFlow[] } = data.data;

          resolve(newData);
        })
        .catch(({ error, resp }) => {
          reject(error);
        });
    });
  }
```

  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  - https://www.javascripttutorial.net/web-apis/javascript-fetch-api/

