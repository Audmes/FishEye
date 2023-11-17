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
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Image de ${name}`);

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
    const svg = `assets/icons/heart.svg`;
    // const video = `assets/photographers/${name}/${image}`;

    function getUserMediaDOM() {
        // On crée l’élément article.
        const article = document.createElement( 'article' );

        // On crée l’élément img.
        const img = document.createElement( 'img' );
        // img.src = "data:image/png;base64," + base64JsonData;
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Image de ${title}`);
        
        const div = document.createElement('div');
        div.classList.add("desc");
        
        // On crée l’élément h1.
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;

        const divLike = document.createElement('div');
        divLike.classList.add("wrap-like");

        // On crée l’élément p.
        const p = document.createElement( 'p' );
        p.textContent = likes;

        const heart = document.createElement('img');
        heart.setAttribute('alt','Like button');
        heart.setAttribute('width','21');
        heart.setAttribute('height','24');
        heart.setAttribute("src", svg);
        // heart.setAttribute('id','heart');
        heart.classList.add('button-heart');

        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(divLike);
        divLike.appendChild(p);
        divLike.appendChild(heart);

        return (article);
    }
    
    return { date, id, image, likes, photographerId, price, title, getUserMediaDOM }
}