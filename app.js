document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "1",
      img: "imagenes/1.jpg"
    },
    {
      name: "2",
      img: "imagenes/2.jpg"
    },
    {
      name: "3",
      img: "imagenes/3.jpg"
    },
    {
      name: "4",
      img: "imagenes/4.jpg"
    },
    {
      name: "5",
      img: "imagenes/5.jpg"
    },
    {
      name: "6",
      img: "imagenes/6.jpg"
    },
    {
      name: "1",
      img: "imagenes/1.jpg"
    },
    {
      name: "2",
      img: "imagenes/2.jpg"
    },
    {
      name: "3",
      img: "imagenes/3.jpg"
    },
    {
      name: "4",
      img: "imagenes/4.jpg"
    },
    {
      name: "5",
      img: "imagenes/5.jpg"
    },
    {
      name: "6",
      img: "imagenes/6.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja (){
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0]=== cartasEscogidas[1]) {
      alert ("¡correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);

    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if(cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "Felicidades, encontraste todos los pares!";
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
