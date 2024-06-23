const ulTenis = document.querySelector(".cardTenis");

const jordaTenis = [
  {
    id: 0,
    imgTenis: "<img src='./img/1 air jordan mid dutch green.png' alt=''/>",
    nomeTenisIfor: "Air Jordan 1 Mid Dutch Green",
    nomeTenis: "Air Jordan",
    precoTenis: "R$ 1.199,99",
  },
  {
    id: 1,
    imgTenis:
      "<img src='./img/2 air jordan high zoom cmft tropical twist.png'alt=''/>",
    nomeTenisIfor: "Air Jordan 1 High Zoom CMFT Tropical Twist",
    nomeTenis: "Air Jordan",
    precoTenis: "R$ 1.049,00",
  },
  {
    id: 2,
    imgTenis:
      "<img src='./img/3 air jordan retro high court purple.png' alt='' />",
    nomeTenisIfor: "Air Jordan 1 Mid Dutch Green",
    nomeTenis: "Air Jordan",
    precoTenis: "R$ 1.350,00",
  },
  {
    id: 3,
    imgTenis: "<img src='./img/4 air jordan mid grey camo.png' alt='' />",
    nomeTenisIfor: " Air Jordan 1 Mid GS Light Smoke Grey",
    nomeTenis: "Air Jordan",
    precoTenis: "1.585,00",
  },
  {
    id: 4,
    imgTenis: "<img src='./img/5 air jordan mid bright citrus.png' alt=''/>",
    nomeTenisIfor: "Air Jordan 1 Mid SE Bright Citrus",
    nomeTenis: "Air Jordan",
    precoTenis: "R$ 949,99",
  },
  {
    id: 5,
    imgTenis:
      "<img src='./img/4 air jordan mid light smoke grey gs.png' alt='' />",
    nomeTenisIfor: "Air Jordan 1 Mid Grey Camo",
    nomeTenis: "Air Jordan",
    precoTenis: "R$ 999,99",
  },
];

function renderizar() {
  ulTenis.innerHTML = "";
  jordaTenis.map(function (cardTenis) {
    ulTenis.innerHTML += template(cardTenis);
  });
}

function template(cardsTenis) {
  return `
      <li>
          <div class="card-tenis-img-container">
            ${cardsTenis.imgTenis}
          </div>
          <h3 class="infor-tenis">${cardsTenis.nomeTenisIfor}</h3>
          <p class="nome-tenis">${cardsTenis.nomeTenis}</p>
          <p class="preço-tenis">${cardsTenis.precoTenis}</p>
        </li>
  `;
}

renderizar();
