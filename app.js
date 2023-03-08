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
