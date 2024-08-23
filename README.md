# Consumir Api 

```  
- Se decalara una constante para almacenar la data
const [data, setData] = useState([]);

useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json()) / Respuesta de la peticione
      .then((data) => setData(data.items)); Cuando este dentro de un array es decir la informacion que tenemos esta dentro de ITEMS y este esta dentro de DATA

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
