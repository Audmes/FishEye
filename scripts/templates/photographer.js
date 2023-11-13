function photographerTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    // console.log(data);

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article');

        const link = document.createElement('a');
        const href = `photographer.html?id=${id}`;
        link.setAttribute('href', href);
        
        const ariaLabel = `View Photographer Profile: ${name}`;
        link.setAttribute('aria-label', ariaLabel);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement('h3');
        h3.textContent = city+','+' '+country;

        const p = document.createElement('p');
        p.textContent = tagline;

        const pPrice = document.createElement('p');
        pPrice.classList.add("price");
        pPrice.textContent = price+'€/jour';

        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(p);
        link.appendChild(pPrice);
        article.appendChild(link);

        return (article);
    }
    return { data, getUserCardDOM }
}

function photographerMediaTemplate(photographer, data) {
    const { name } = photographer;
    const { date, id, image, likes, photographerId, price, title } = data;
    
    // console.log(data);
    // console.log(photographer);

    const picture = `assets/photographers/${name}/${image}`;

    function getUserMediaDOM() {
        const article = document.createElement( 'article' );
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;

        const h3 = document.createElement( 'h3' );
        h3.textContent = likes;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);

        return (article);
    }
    
    return { date, id, image, likes, photographerId, price, title, getUserMediaDOM }
}