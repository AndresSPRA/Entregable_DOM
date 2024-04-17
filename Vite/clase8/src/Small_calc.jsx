import { useState } from 'react';
import './App.css';

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

const Calculator = () => {
  const btn1 = new Button("CalcT", "", "button");
  const operadores = ["+","-","/","*"]
  const [inputCalc, setInputCalc] = useState('');
  const [specialCase, setSpecialCase] = useState('');

  const updateInput = (input) => {
    setSpecialCase(null)
    if (operadores.includes(inputCalc.slice(-1)) && operadores.includes(input)) {
      setInputCalc(inputCalc.slice(0, -1) + input);
    } else {
      setInputCalc(inputCalc + input);
    }
  };

  const calculateN = () => {
    const value = inputCalc.slice(-1)
    if (operadores.includes(value)) {
       setInputCalc(eval(inputCalc.slice(0,-1)).toString());
    } else {
       if (inputCalc.search(/\/0/) !== -1) {
            setInputCalc('');
            setSpecialCase("ERROR DE SINTAXIS");
        } else {
            setInputCalc(eval(inputCalc).toString());
        }
        } 
  };

  const deleteInput = () => {
    setInputCalc(inputCalc.slice(0,-1))
  };
  

  return (
    <>
    <h2>Calculadora simple</h2>
    <section className='Calc-container'>

    <input className="Calc-input" type="text" readOnly value={inputCalc} placeholder={specialCase} />

      <section className='Calc-fila'>
      {btn1.Crear("9", () => updateInput(9))}
      {btn1.Crear("8", () => updateInput(8))}
      {btn1.Crear("7", () => updateInput(7))}
      {btn1.Crear("+", () => updateInput("+"))}
      </section>
      <section className="Calc-fila">
      {btn1.Crear("6", () => updateInput(6))}
      {btn1.Crear("5", () => updateInput(5))}
      {btn1.Crear("4", () => updateInput(4))}
      {btn1.Crear("-", () => updateInput("-"))}
      </section>
      <section className="Calc-fila">
      {btn1.Crear("3", () => updateInput(3))}
      {btn1.Crear("2", () => updateInput(2))}
      {btn1.Crear("1", () => updateInput(1))}
      {btn1.Crear("*", () => updateInput("*"))}
      </section>
      <section className="Calc-fila">
      {btn1.Crear("C", () => deleteInput())}
      {btn1.Crear("0", () => updateInput(0))}
      {btn1.Crear("=",() => calculateN())}
      {btn1.Crear("/", () => updateInput("/"))}
      </section>


    </section>
    </>
  );
}

export default Calculator;
