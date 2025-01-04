const pool = require('./dbConfig');
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

async function populateDatabase() {
    const insertCategoriesQuery = `INSERT INTO categories (name) VALUES ($1) RETURNING id`;
    const insertArticleQuery = `
        INSERT INTO articles (category_id, title, link, summary, published)
        VALUES ($1, $2, $3, $4, $5)
    `;

    for (const category in articles) {
        const { rows } = await pool.query(insertCategoriesQuery, [category]);
        const categoryId = rows[0].id;

        for (const article of articles[category]) {
            await pool.query(insertArticleQuery, [
                categoryId,
                article.title,
                article.link,
                article.summary,
                article.published
            ]);
        }
    }

    console.log('Database populated successfully');
}

populateDatabase()
    .catch(err => {
        console.error('Error populating database', err);
    })
    .finally(() => {
        pool.end();
    });
