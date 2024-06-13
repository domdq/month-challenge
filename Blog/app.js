const ul = document.querySelector(".cards");
const posts = [
  {
    id: 1,
    date: "17 de Ago, 2024",
    title: "O que é linguagem de programação? Conheça as principais",
    bodyText:
      "Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.",
    isLiked: true,
  },
  {
    id: 2,
    date: "12 de Jul, 2024",
    title: "GitHub agora permite fazer login sem precisar de senha",
    bodyText:
      "O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.",
    isLiked: false,
  },
  {
    id: 3,
    date: "21 de Jun, 2024",
    title: "Por que os hiperlinks são azuis em sua maioria?",
    bodyText:
      "Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.",
    isLiked: false,
  },
];

function renderTemplate() {
  ul.innerHTML = "";
  posts.forEach(function (post) {
    ul.innerHTML += template(post);
  });
  const buttonLike = document.querySelectorAll(".btn-like");
  buttonLike.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const id = +event.target.dataset.id;
      const post = posts.find(function (post) {
        return post.id === id;
      });
      const indexPost = posts.findIndex(function (post) {
        return post.id === id;
      });
      posts[indexPost].isLiked = !post.isLiked;
      console.log(posts[indexPost]);
      renderTemplate();
    });
  });
}
renderTemplate();

function template(post) {
  return ` <li class="${post.isLiked ? "is-liked" : ""}">
            <div class="data_logo">
              <span class="data">${post.date}</span>
              <ion-icon class="btn-like" data-id="${post.id}" name="${
    post.isLiked ? "heart-sharp" : "heart-outline"
  }"></ion-icon>
            </div>
                <h1 id="titlle-card">${post.title}</h1>
                <p id="text-card">${post.bodyText}</p>
          </li>`;
}

console.log(buttonLike);
