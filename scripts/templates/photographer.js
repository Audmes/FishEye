/**
* FishEye JS : Photographer Template
**/
export default class PhotographerTemplate {
    constructor(photographer, medias) {
        this.photographer = photographer;
        this.medias = medias;
    }

    createPhotographerHeader() {
        const photographerProfile = document.querySelector('.photographer-header');
        const formName = document.querySelector(".modal_form_name");
        formName.textContent = this.photographer.name;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
        }

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
    }

    createPhotographerFilters() {
        const photographerFilters = document.querySelector(".photographer-filters");

        const filters =  `
            <h2>Trier par</h2>
            <div class="filters_selection" >
                <div class="dropdown">
                    <button class="btn_drop" type="button" aria-haspopup="listbox" aria-expanded="false" aria-controls="filter options" aria-label="Sort by">
                        <span id="current_filter">Titre</span>
                        <span class="fa-solid fa-chevron-up arrow-up" aria-hidden="true"></span>
                    </button>

                    <ul class="dropdown_content" role="listbox" aria-hidden="true">
                        <li role="option">
                            <button type="button" tabindex="-1" aria-label="Trié par titre">Titre</button>
                        </li>
                        <li role="option">
                            <button type="button" tabindex="-1" aria-label="Trié par popularité">Popularité</button>
                        </li>
                        <li role="option">
                            <button type="button" tabindex="-1" aria-label="Trié par date">Date</button>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        photographerFilters.innerHTML = filters;
        return filters;
    }

    createPhotographerMedias() {
        const photographerContent = document.querySelector(".photographer-gallery");

        const content = `
            <div class="gallery">
                ${this.medias.map(media => {
                    const mediaContent = media.image
                        ? ` <img class="gallery_thumbs" src="./assets/photographers/${this.photographer.name}/thumbs/${media.image}" alt="${media.title}">`
                        : ` <video class="gallery_thumbs" aria-label="${media.title}">
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
            </div>
            <aside>
                <p class="photographer_Likes">
                    <span class="photographer_likes_count"></span>
                    <span class="fas fa-heart" aria-hidden="true"></span>
                </p>
                <span>${this.photographer.price}€ / jour</span>
            </aside>
        `;
        
        photographerContent.innerHTML = content;
        return content;
    }

    createPhotographerLightbox() {
        const photographerLightbox = document.querySelector(".lightbox_wrapper");

        const lightbox = `
            <div class="lightbox">
                <button class="btn_close_lightbox btn_close" aria-label="Close dialog"></button>
                <button class="btn_next" aria-label="Next media"></button>
                <button class="btn_previous" aria-label="Previous media"></button>
                <figure class="lightbox_media" aria-label="Current Media"></figure>
            </div> 
        `;

        photographerLightbox.innerHTML = lightbox;
        return lightbox;
    }
}