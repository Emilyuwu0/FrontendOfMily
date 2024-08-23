# Metodos HTTP

## Get
```js
-Get 1

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;







Get 2

- Se decalara una constante para almacenar la data
const [data, setData] = useState([]);

useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json()) / Respuesta de la peticione
      .then((data) => setData(data.items)); / Cuando este dentro de un array es decir la informacion que tenemos esta dentro de ITEMS y este esta dentro de DATA

  }, []);

- Lo mapeamos 
  <div>
      <h1>Lista de personajes</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
```

## Post
```js
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://api.example.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: input }),
    })
      .then(response => response.json())
      .then(data => console.log('Data submitted:', data))
      .catch(error => console.error('Error submitting data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```


![image](https://es.abstracta.us/wp-content/uploads/2021/09/metodos-HTTP-pruebas-API-REST.png)
