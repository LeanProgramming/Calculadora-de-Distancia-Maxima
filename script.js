document
  .getElementById("los-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de las alturas de las antenas
    let alturaAntena1 = parseFloat(
      document.getElementById("altura-antena1").value
    );
    let alturaAntena2 = parseFloat(
      document.getElementById("altura-antena2").value
    );

    // Calcular la distancia máxima LOS en kilómetros
    let distanciaMaxima = 3.57 * (Math.pow(4/3 * alturaAntena1, 1/2) + Math.pow(4/3 * alturaAntena2, 1/2));

    // Mostrar el resultado en el elemento "resultado"
    document.getElementById("resultado").innerHTML =
      "Distancia máxima LOS: " + distanciaMaxima.toFixed(2) + " km";

    // Graficar la distancia en el elemento "grafico"
    let grafico = document.getElementById("grafico");
    grafico.innerHTML = ""; // Limpiar cualquier gráfico anterior

    let distanciaGrafico = Math.max(alturaAntena1, alturaAntena2);
    let barraAntena1 = document.createElement("div");
    barraAntena1.className = "antenas";
    barraAntena1.innerHTML = `<div class="barra-antena" style="height:${alturaAntena1 }px"></div><p>Antena 1: ${alturaAntena1} m</p>`;

    let barraAntena2 = document.createElement("div");
    barraAntena2.className = "antenas";
    barraAntena2.innerHTML = `<div class="barra-antena" style="height:${alturaAntena2}px"></div><p>Antena 2: ${alturaAntena2} m</p>`;

    let distanciaLOS = document.createElement("div");
    distanciaLOS.innerHTML= `<div class="distancia-los" style="height:${distanciaGrafico}px"></div><p>Distancia máxima: ${distanciaMaxima.toFixed(2)} km</p>`;

    grafico.appendChild(barraAntena1);
    grafico.appendChild(distanciaLOS);
    grafico.appendChild(barraAntena2);
  });
