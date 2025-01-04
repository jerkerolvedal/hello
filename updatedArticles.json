const articles = {
    nöje: [
        {
            title: "Johan Lind spår 2025",
            link: "https://ng.se/artiklar/johan-lind-spar-2025",
            summary: "Nöjesguidens krönikör Johan Lind hoppas att Farah Abadi blir cancelled.",
            published: "2025-01-03"
        },
        {
            title: "Jacob Wester spår 2025",
            link: "https://ng.se/artiklar/jacob-wester-spar-2025",
            summary: "Extremskidåkaren Jacob Wester tror att vi kommer låtsas tycka om dyra vinflaskor med priset skrivet i tjock vit tuschpenna.",
            published: "2025-01-03"
        },
        {
            title: "Lykke recapar Instagramåret 2024",
            link: "https://ng.se/artiklar/lykke-recapar-instagramaret-2024",
            summary: "Krögarnas metoo, Haglöfsryggsäcken från helvetet och Sigge Eklund-hysterin präglade året.",
            published: "2025-01-03"
        }
    ],
    övrigt: [
        {
            title: "7 Ways To Avoid Walls Of Text",
            link: "#",
            summary: "Tips for making text content more readable on websites.",
            published: "2025-01-03"
        }
    ]
};

function renderArticles(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    articles[category].forEach(article => {
        const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        const title = document.createElement("h3");
        const titleLink = document.createElement("a");
        titleLink.href = article.link;
        titleLink.textContent = article.title;
        titleLink.target = "_blank";
        title.appendChild(titleLink);

        const summary = document.createElement("p");
        summary.textContent = article.summary;

        const published = document.createElement("p");
        published.textContent = `Published: ${article.published}`;
        published.style.fontStyle = "italic";

        articleDiv.appendChild(title);
        articleDiv.appendChild(summary);
        articleDiv.appendChild(published);

        container.appendChild(articleDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderArticles("nöje", "nöje-articles");
    renderArticles("övrigt", "övrigt-articles");
});
