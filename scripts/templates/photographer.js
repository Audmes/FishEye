/**
* FishEye JS : Photographer Template
**/
export default class PhotographerTemplate {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    };

    createPhotographerHeader() {
        const photographerProfile = document.querySelector('.photographer-header');

        const profile = `
            <div class="photographer-profile_infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="btn contact_button" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img class="photographer_portrait" src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        photographerProfile.innerHTML = profile;
        return profile;
    };

    createPhotographerFilters() {
        const photographerFilters = document.querySelector(".photographer-filters");
        console.log('je suis ici');
        const filters =  `
            <div class="filters">Hello</div>
        `;

        photographerFilters.innerHTML = filters;
        return filters;
    };

    createPhotographerMedias() {
        const photographerContent = document.querySelector(".photographer-gallery");

        const content = `
            ${this.medias.map(media => {
                const mediaContent = media.image
                    ? ` <img class="gallery_thumbs" src="./assets/photographers/${this.photographer.name}/thumbs/${media.image}" alt="${media.alt}">`
                    : ` <video class="gallery_thumbs" aria-label="${media.alt}">
                            <source src="./assets/photographers/${this.photographer.name}/thumbs/${media.video}" type="video/mp4">
                        </video>`;
                return `
                        <article class="gallery_card">                           
                            <a href="#" data-media=${media.id} role="link" aria-label="View media large">
                                <figure>${mediaContent}</figure>
                            </a>
                            <figcaption>
                                <h2>${media.title}</h2>
                                    <div role="group" aria-label="Like button and number of likes">
                                        <span class="nbLike">${media.likes}</span> 
                                        <button class="btn_like" type="button" aria-label="Like" data-id="${media.id}">
                                            <span class="fas fa-heart" aria-hidden="true"></span>
                                        </button> 
                                    </div>
                            </figcaption>
                        </article>
                `;
                }).join("")}
        `;
        photographerContent.innerHTML = content;
        return content;
    };
};