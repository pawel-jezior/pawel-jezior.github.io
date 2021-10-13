import "../scss/main.scss";

console.log("Czesc, jestem Pawel - milo mi Cie poznac! 🚀")

fetch(
  "https://api.github.com/users/pawel-jezior/repos?sort=created&direction=asc"
)
  .then((res) => res.json())
  .then((res) => {
    const container = document.querySelector(".projects-grid--js");
    for (let repo of res) {
      const { description, homepage, html_url, name } = repo;
      const template = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        <div class="project__content">
          <img src="img/github.svg" alt="" />
          <h3 class="project__grid project__title">
            <span class="project__label">projekt:</span
            ><span>${name}</span>
          </h3>
          <p class="project__grid project__grid--description">
            <span class="project__label">opis:</span
            ><span>${description}</span>
          </p>
          <p class="project__grid">
            <span class="project__label">demo:</span
            ><span
              >&lt;<a
                class="project__link"
                href="${homepage}"
                title="${name} - demo"
                >zobacz_tutaj</a
              >&gt;</span
            >
          </p>
          <p class="project__grid">
            <span class="project__label">github:</span
            ><span
              >&lt;<a
                class="project__link"
                href="${html_url}"
                title="${name} - code"
                >kod_źródłowy</a
              >&gt;</span
            >
          </p>
        </div>
      </article>`;
      if (description) {
        container.innerHTML += template;
      }
    }
  })
  .catch((e) => console.log(e));
