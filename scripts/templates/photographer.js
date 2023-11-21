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
            <div class="photographer_profile__infos">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <p class="photographer_location">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="contact_button" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img class="photographer_portrait" src="assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        photographerProfile.innerHTML = profile;
        return profile;
    };

    createPhotographerMedias() {
        const photographerContent = document.querySelector(".photographer-content");

        const content = `
            <section class="gallery">
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
            </section >
        `;
        photographerContent.innerHTML = content;
        return content;
    };
};