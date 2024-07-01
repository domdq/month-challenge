const ularticle = document.querySelector(".articleCards");

const techBlog = [
  {
    id: 0,
    articleImg: "<img src='./img/image1.png' alt='' class='img' />",
    titlleArticle:
      "O que é linguagem de programação? <br/> Conheça as principais",
    textArticle:
      "Uma das mais populares vertentes da tecnologia <br /> da informação, a área de...",
  },
  {
    id: 1,
    articleImg: "<img src='./img/python.png' alt='' class='img' />",
    titlleArticle:
      "Python: por que a linguagem é tão <br /> usada para Data Science e finanças?",
    textArticle:
      "O mundo da programação conta com <br /> algumas opções de linguagem para...",
  },
  {
    id: 2,
    articleImg: "<img src='./img/GitHub.png' alt='' class='img' />",
    titlleArticle:
      "GitHub tem receita de US$ 1 bilhão e <br /> 90 milhões de usuários",
    textArticle:
      "O popular serviço de repositório de <br />código GitHub foi adquirido pela...",
  },
  {
    id: 3,
    articleImg: "  <img src='./img/Git.png' alt='' class='img' />",
    titlleArticle:
      "15 comandos no GIT que os <br /> desenvolvedores precisam saber",
    textArticle:
      " Dominar os comandos GIT é uma <br /> habilidade que se conquista com...",
  },
  {
    id: 4,
    articleImg: "<img src='./img/Git-Gitub.png' alt='' class='img'/>",
    titlleArticle:
      "GIT e GitHub: o que são e quais as <br /> diferenças entre eles?",
    textArticle:
      "Git e GibHub são dois softwares de <br /> controle de versão essenciais para...",
  },
  {
    id: 5,
    articleImg: "<img src='./img/GitHubCopilot.png' alt='' class='img'/>",
    titlleArticle:
      "GitHub Copilot ganha integração com <br /> GPT-4 e interface conversacional",
    textArticle:
      "O GitHub Copilot, ferramenta de <br /> desenvolvimento baseada em IA...",
  },
];

function renderizar() {
  ularticle.innerHTML = "";
  techBlog.forEach(function (techBlogArticle) {
    ularticle.innerHTML += template(techBlogArticle);
  });
}

function template(techBlogArticles) {
  return `
     <li>
          <div class="articleImg">
            ${techBlogArticles.articleImg}
          </div>
          <h3 class="articleH3">
          ${techBlogArticles.titlleArticle}
          </h3>
          <p class="articleText">
          ${techBlogArticles.textArticle}
          </p>
        </li>
  `;
}

renderizar();
