function fetchData(apiURL) {
    return fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            const newData = data.map((item) => {
                return {
                    title: item.title || item.name,
                    url: item.url || `https://www.tabnews.com.br/${item.owner_username}/${item.slug}`,
                    description: item.description || "",
                };
            });

            return newData.slice(0, 8);
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
    fetchData("https://api.hackertab.dev/engine/repos?range=daily&tags=frontend").then((data) => {
        const newsColumn = document.querySelector(".github");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

function getMedium() {
    fetchData("https://api.hackertab.dev/engine/feeds?source=medium").then((data) => {
        const newsColumn = document.querySelector(".medium");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

function getDevto() {
    fetchData("https://api.hackertab.dev/engine/feeds?source=devto").then((data) => {
        const newsColumn = document.querySelector(".devto");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

function getTabNews() {
    fetchData("https://www.tabnews.com.br/api/v1/contents?strategy=relevant").then((data) => {
        const newsColumn = document.querySelector(".tabnews");

        newsColumn.innerHTML = data.map((item) => renderData(item)).join("");
    });
}

getGithub();
getMedium();
getDevto();
getTabNews();
