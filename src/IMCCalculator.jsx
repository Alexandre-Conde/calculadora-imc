import React, { useState } from "react";

function IMCCalculator() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Baixo peso";
    else if (imc < 24.9) classificacao = "Eutrofia (peso adequado)";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau 1";
    else if (imc < 39.9) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade extrema";

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Peso em kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura em metros"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default IMCCalculator;
