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

function photographerHeaderTemplate(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    // console.log(data);

    const picture = `assets/photographers/${portrait}`;
    const photographerInfo = document.querySelector(".photographer-info");

    function getUserCardDOM() {
        // On crée l’élément article.
        const article = document.createElement( 'article');

        // On crée l’élément a.
        const link = document.createElement('a');
        const href = `photographer.html?id=${id}`;
        link.setAttribute('href', href);
        
        const ariaLabel = `View Photographer Profile: ${name}`;
        link.setAttribute('aria-label', ariaLabel);

        // On crée l’élément img.
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Image de ${name}`);

        // On crée l’élément h2.
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        // On crée l’élément h3.
        const h3 = document.createElement('h3');
        h3.textContent = city+','+' '+country;

        // On crée l’élément p.
        const p = document.createElement('p');
        p.textContent = tagline;
        
        // On crée l’élément p.
        // const pPrice = document.createElement('p');
        // pPrice.classList.add("price");
        // pPrice.textContent = price+'€/jour';

        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(p);
        // photographerInfo.appendChild(pPrice);
        article.appendChild(link);

        return (article);
    }
    return { data, getUserCardDOM }
}

function photographerInfoTemplate(data) {
    const { price } = data;
    // console.log(data);

    const photographerInfo = document.querySelector(".photographer-info");
    
    function getUserInfoDOM() {
        // On crée l’élément h3.
        // const h3 = document.createElement('h3');
        // h3.textContent = city+','+' '+country;
        
        // On crée l’élément p.
        const pPrice = document.createElement('p');
        pPrice.classList.add("price");
        pPrice.textContent = price+'€/jour';

        photographerInfo.appendChild(pPrice);

        return (pPrice);
    }
    return { data, getUserInfoDOM }
}

function photographerMediaTemplate(photographer, data, ) {
    const { name } = photographer;
    // console.log(data);

    const { id, photographerId, title, image, video, likes, date, price } = data;

    // console.log(photographer);
    // console.log(image);
    // console.log(video);

    const picture = `assets/photographers/${name}/${image}`;
    const movie = `assets/photographers/${name}/${video}`;
    const svg = `assets/icons/heart.svg`;

    //Si c'est une image je créé une image sinon si c'est une video je créé un élément vidéo sinon erreur

    function getUserMediaDOM() {
        // On crée l’élément article.
        const article = document.createElement( 'article' );

        // Si il y a une image, on crée l’élément img.
        if (image) {
            // On crée l’élément img.
            const img = document.createElement( 'img' );
            // img.src = "data:image/png;base64," + base64JsonData;
            img.setAttribute("src", picture);
            img.setAttribute("alt", `Image de ${title}`);
            // console.log('je suis là');
            article.appendChild(img);
        }

        // Si il y a une vidéo, on crée l’élément video.
        if (video) {
            // On crée l’élément video.
            const mov = document.createElement('video');
            mov.setAttribute('controls','');
            mov.setAttribute('width','350');
            mov.setAttribute('height','300');

            // On crée l’élément source.
            const source = document.createElement('source');
            source.setAttribute('src', movie);
            source.setAttribute('type','video/mp4');

            // On crée l’élément p.
            const pmov = document.createElement('p');
            pmov.textContent = 'Votre navigateur ne prend pas en charge les vidéos HTML5. Voici';

            // On crée l'élément a.
            const amov = document.createElement('a');
            amov.textContent = 'un lien pour télécharger la vidéo';
            amov.setAttribute('href', movie);

            article.appendChild(mov);
            mov.appendChild(source);
            mov.appendChild(pmov);
            pmov.appendChild(amov);
        }
               
        // On crée l’élément Div.
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

        // On crée l’élément img.
        const heart = document.createElement('img');
        heart.setAttribute('alt','likes ');
        heart.setAttribute('width','21');
        heart.setAttribute('height','24');
        heart.setAttribute("src", svg);
        // heart.setAttribute('id','heart');
        heart.classList.add('button-heart');

        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(divLike);
        divLike.appendChild(p);
        divLike.appendChild(heart);

        return (article);
    }
    
    return { date, id, image, video, likes, photographerId, price, title, getUserMediaDOM }
}