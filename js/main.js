function fetchData(apiURL) {
    return fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            const newData = data.map((item) => {
                return {
                    title: item.title,
                    url: item.url || `https://www.tabnews.com.br/${item.owner_username}/${item.slug}`,
                    description: item.description || "",
                };
            });

            return newData;
        });
}

function renderData(item) {
    return `<div class="news-content--item">
            <p class="item-title">
              <a href="${item.url}" target="_blank">${item.title.replace(/[<>]/g, "")}</a>
            </p>
            ${item.description && `<p class="item-summary">${item.description.replace(/[<>]/g, "")}</p>`}
          </div>`;
}

function getGithub() {
    fetchData("https://api.hackertab.dev/data/v2/github/global/daily.json").then((data) => {
        const newsColumn = document.querySelector(".github");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

function getMedium() {
    fetchData("https://api.hackertab.dev/data/v2/medium/javascript.json").then((data) => {
        const newsColumn = document.querySelector(".medium");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

function getFreeCodeCamp() {
    fetchData("https://api.hackertab.dev/data/v2/freecodecamp/programming.json").then((data) => {
        const newsColumn = document.querySelector(".freecodecamp");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

function getTabNews() {
    fetchData("https://www.tabnews.com.br/api/v1/contents?strategy=relevant").then((data) => {
        const newsColumn = document.querySelector(".tabnews");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

const searchForm = document.querySelector("form");
const clearButton = document.querySelector(".clear");

searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    searchForm.submit();
    searchForm.reset();
});

clearButton.addEventListener("click", (ev) => {
    searchForm.reset();
});

getGithub();
getMedium();
getFreeCodeCamp();
getTabNews();
