import Api from '../api/Api.js';
import Photographer from '../models/Photographer.js';
import PhotographerTemplate from "../templates/photographer.js";
import MediasFactory from "../factories/MediasFactory.js";
import { openCloseModal, validateForm } from "../utils/contactForm.js";
import { openCloseFilterMenu } from "../utils/filters.js";
import { displayLightbox } from "../utils/lightbox.js";

const photographersApi = new Api("./data/photographers.json");

// Récupère l'id du photographe dans l'URL
let params = new URL(document.location).searchParams;
const photographerId = parseInt(params.get("id")); // le nombre correspondant à l'id

// Récupère les données du photographe
export const getPhotographerById = async () => {
    const { photographers, media } = await photographersApi.get();

    const photographer = photographers
        .map(photographer => new Photographer(photographer))
        .find(photographer => photographer.id == photographerId);
    
    const medias = media
        .map(media => new MediasFactory(media))
        .filter(media => media.photographerId == photographerId);

    return { photographer, medias };
};

// Disposition des données du photographe
const displayPhotographerPage = async () => {
    const { photographer, medias } = await getPhotographerById();

    const headerTemplate = new PhotographerTemplate(photographer);
    headerTemplate.createPhotographerHeader();

    const mediasTemplate = new PhotographerTemplate(photographer, medias);
    mediasTemplate.createPhotographerMedias();

    openCloseFilterMenu();
    openCloseModal();
    validateForm();
    // displayMediaWithFilter(mediasTemplate)
    displayLightbox(mediasTemplate);
};

displayPhotographerPage();