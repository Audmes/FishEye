import Api from '../api/Api.js';
import Photographer from '../models/Photographer.js';
import PhotographerTemplate from "../templates/photographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import { openCloseModal, validateForm } from "../utils/contactForm.js";
import { openCloseFilterMenu, displayMediaWithFilter } from "../utils/filters.js";
import { displayLightbox } from "../utils/lightbox.js";
import { displayTotalLikes } from "../utils/likes.js";

const photographersApi = new Api("./data/photographers.json");

// Récupère l'id du photographe dans l'URL
let params = new URL(document.location).searchParams;
const photographerId = parseInt(params.get("id")); // le nombre correspondant à l'id

// Récupère les données du photographe
export const getPhotographerById = async () => {
    const { photographers, media } = await photographersApi.get();

    // Les Informations du photographe
    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    
    // Les médias du Photographe
    const medias = media
        .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);

    return { photographer, medias };
};

// Disposition des données du photographe
const displayPhotographerPage = async () => {
    const { photographer, medias } = await getPhotographerById();

    // Affichage du Header
    const headerTemplate = new PhotographerTemplate(photographer);
    headerTemplate.createPhotographerHeader();

    //Affichage du Filtre
    const filtersTemplate = new PhotographerTemplate();
    filtersTemplate.createPhotographerFilters();

    // Affichage des Médias
    const mediasTemplate = new PhotographerTemplate(photographer, medias);
    mediasTemplate.createPhotographerMedias();

    // Affichage de la Lightbox
    const lightboxTemplate = new PhotographerTemplate();
    lightboxTemplate.createPhotographerLightbox();

    openCloseFilterMenu();
    openCloseModal();
    validateForm();
    displayMediaWithFilter(mediasTemplate);
    displayLightbox(mediasTemplate);
    displayTotalLikes();
};

displayPhotographerPage();