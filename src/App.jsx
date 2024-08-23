import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.4) {
      classificacao = 'Abaixo peso';
    } else if (imc <= 18.5 && imc <= 24.99) {
      classificacao = 'Peso normal';
    } else if (imc >= 24.99 && imc <= 29.99) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 29.99 && imc <= 34.99) {
      classificacao = 'Obesidade grau I';
    } else if (imc >= 34.99 && imc <= 39.99) {
      classificacao = 'Obesidade grau II';
    } else if (imc > 39.99) {
      classificacao = 'Obesidade grau III ou Mórbida';
    }

    setResultado(`Seu IMC é: ${imc.toFixed(2)} - Classificação: ${classificacao}`);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <p>Por favor, use o ponto (.) ao inserir altura e peso.</p>
      <form onSubmit={calcularIMC}>
        <div className='inputs'>
          <label>
            Altura (m):
            </label>
            <input
              type="number"
              step="0.01" placeholder='Insira a altura. (Ex: 1.60)'
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              required 
            />

        </div>
        <div className='inputs'>
          <label>
            Peso (kg):
            </label>
            <input
              type="number"
              step="0.01" placeholder='Insira o peso. (Ex: 52)'
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              required
            />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>
      {resultado && <h2>{resultado}</h2>}
    </div>
  );
}

export default App;
