import React, { useState } from "react";

interface idata {
  name: string;
  id: number;
}

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [idForm, setIdForm] = useState(0);
  const [data, setData] = useState([
    {
      name: "hola 1",
      id: 1
    },
    {
      name: "hola 2",
      id: 2
    },
    { name: "hola 3", id: 3 }
  ]);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const newData = [...data, { name, id: data.length + 1 }];
    console.log(newData);
    setData(newData);
  };
  const handleGetName = (e: any) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleDelete = (id: number) => {
    const newData = data.filter(dato => dato.id !== id);
    setData(newData);
  };
  const handleGetNameEditar = (id: number) => {
    const newName = data.filter(dato => dato.id === id);
    setIdForm(id);
    setName(newName[0].name);
  };
  const handleEditar = (e: any) => {
    e.preventDefault();
    console.log("editando", name, idForm);
    const newData = data.filter(dato => dato.id !== idForm);
    setData([
      ...newData,
      {
        name,
        id: idForm
      }
    ]);
  };
  return (
    <div>
      <ul>
        {data.map((dato: idata) => (
          <li key={dato.id}>
            {dato.name}
            <button onClick={() => handleGetNameEditar(dato.id)}>editar</button>
            <button onClick={() => handleDelete(dato.id)}>eliminar</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleOnSubmit}>
        <h1>agregar</h1>
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={name} onChange={handleGetName} />
        <input type="submit" value="agregar" />
      </form>

      <form onSubmit={handleEditar}>
        <h1>editar</h1>
        <label htmlFor="name">name</label>
        <input type="text" id="name" value={name} onChange={handleGetName} />
        <input type="submit" value="editar" />
      </form>
    </div>
  );
};

export default App;
