import { useState } from 'react'
import './App.css'


class Button {
  constructor(clase, id, tipo, texto) {
    this.clase = clase;
    this.id = id;
    this.tipo = tipo;
    this.texto = texto;
  }
  Crear(texto, funcion) {
    return (
      <button onClick={() => funcion()} className={this.clase} id={this.id} type={this.tipo}>
        {texto}
      </button>
    );
  }
}



function App() {
  const btn2 = new Button("AppT", "", "button");
  const [inputApp, setinputApp] = useState('');
  const [inputSelect, setinputSelect] = useState('°C----°F');

  const unitConvert = () => {
  if (inputApp){
    switch (inputSelect) {
      case "°C----°F":
          setinputApp((inputApp * 9/5) + 32) 
        break;
      case "°F----°C":
          setinputApp((inputApp - 32) * 5/9) 
        break;
      case "Cm----in":
          setinputApp(inputApp/2.54)
        break;
      case "In----cm":
          setinputApp(inputApp*2.54)
        break;
      case "Pa----Bar":
          setinputApp(inputApp/100000)
        break;
      case "bar----Pa":
          setinputApp(inputApp*100000)
        break;
      default:
        setinputApp(undefined)
    }
  }
  

  }


  return(
    <>
    <section>
      <h2>Caluladora de Unidades</h2>
      <h3>{inputSelect}</h3>
      <input className="Calc-input" type="number" onChange={(event) => setinputApp(event.target.value) } value={inputApp} placeholder='' />
      {btn2.Crear('Enviar',() => unitConvert())}
      <br />
    </section>
    <section>
      <h3>Selecciona la conversión:</h3>
      <select onChange={(event) => setinputSelect(event.target.value)}>
        <option value="°C----°F">Grados a Fahrenheit</option>
        <option value="°F----°C">Fahrenheit a Grados</option>
        <option value="Cm----in">Centímetros a Pulgadas</option>
        <option value="In----cm">Pulgadas a Centímetros</option>
        <option value="Pa----Bar">Pascal a Bar</option>
        <option value="bar----Pa">Bar a Pascal</option>
      </select>
    </section>
    </>

  )
  
}

export default App
