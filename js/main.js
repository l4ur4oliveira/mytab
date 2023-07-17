function getGithub() {
    fetch("https://api.hackertab.dev/data/v2/github/global/daily.json")
        .then((response) => response.json())
        .then((data) => {
            const newsColumn = document.querySelector(".github");
            const newsContent = data.map((item) => {
                return `<div class="news-content--item">
                          <p class="item-title">
                            <a href="${item.url}" target="_blank">${item.title}</a>
                          </p>
                          ${
                              item.description
                                  ? `<p class="item-summary">
                                    ${item.description}
                                  </p>`
                                  : ""
                          }
                        </div>`;
            });

            newsColumn.innerHTML = newsContent.join("");
        });
}

function getMedium() {
    fetch("https://api.hackertab.dev/data/v2/medium/javascript.json")
        .then((response) => response.json())
        .then((data) => {
            const newsColumn = document.querySelector(".medium");
            const newsContent = data.map((item) => {
                return `<div class="news-content--item">
                          <p class="item-title">
                            <a href="${item.url}" target="_blank">${item.title}</a>
                          </p>
                          ${
                              item.description
                                  ? `<p class="item-summary">
                                    ${item.description}
                                  </p>`
                                  : ""
                          }
                        </div>`;
            });

            newsColumn.innerHTML = newsContent.join("");
        });
}

function getFreeCodeCamp() {
    fetch("https://api.hackertab.dev/data/v2/freecodecamp/programming.json")
        .then((response) => response.json())
        .then((data) => {
            const newsColumn = document.querySelector(".freecodecamp");
            const newsContent = data.map((item) => {
                return `<div class="news-content--item">
                          <p class="item-title">
                            <a href="${item.url}" target="_blank">${item.title}</a>
                          </p>
                          ${
                              item.description
                                  ? `<p class="item-summary">
                                    ${item.description}
                                  </p>`
                                  : ""
                          }
                        </div>`;
            });

            newsColumn.innerHTML = newsContent.join("");
        });
}

function getTabNews() {
    fetch("https://www.tabnews.com.br/api/v1/contents?strategy=relevant")
        .then((response) => response.json())
        .then((data) => {
            const newsColumn = document.querySelector(".tabnews");
            const newsContent = data.map((item) => {
                return `<div class="news-content--item">
                          <p class="item-title">
                            <a href="https://www.tabnews.com.br/${item.owner_username}/${item.slug}" target="_blank">${
                    item.title
                }</a>
                          </p>
                          ${
                              item.description
                                  ? `<p class="item-summary">
                                    ${item.description}
                                  </p>`
                                  : ""
                          }
                        </div>`;
            });

            newsColumn.innerHTML = newsContent.join("");
        });
}

getGithub();
getMedium();
getFreeCodeCamp();
getTabNews();
