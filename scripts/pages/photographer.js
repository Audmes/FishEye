//Mettre le code JavaScript lié à la page photographer.html
let photographerId = window.location.search;
photographerId = photographerId.slice(4);
// console.log(photographerId);

const getData = async () => {
    // Récupère les datas des photographes
    const response = await fetch('data/photographers.json');
    const data = await response.json();
    // console.log(data);
    return data;
}

const getPhotographerById = async (photographerId) => {
    // Récupère les datas du photographe par son Id
    const data = await getData();
    let dataId = data[('photographers')];

    return dataId.filter(
        function(data) { return data.id == photographerId }
    );
}

const getPhotographerMediaById = async (photographerId) => {
    // Récupère les datas média du photographe par son Id
    const data = await getData();
    let mediaId = data[('media')];
    return mediaId.filter(
        function(data) { return data.photographerId == photographerId }
    );
}

async function displayDataPhotographer(photographer) {
    // Disposition des données du photographe
    // const { name } = photographer[0];
    const photographersSection = document.querySelector(".photograph-header");

    // console.log({name});

    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}

async function displayDataMedia(photographer, photographerMedia) {
    // Disposition des données Media du photographe
    const photographersSection = document.querySelector(".photographer-media_section");

    photographerMedia.forEach((media) => {
        const photographerModel = photographerMediaTemplate(photographer, media);
        const userMediaDOM = photographerModel.getUserMediaDOM();
        photographersSection.appendChild(userMediaDOM);
    });
}

async function init(photographerId) {
    // Récupère les datas du photographe
    const photographer = await getPhotographerById(photographerId);
    const photographerMedia = await getPhotographerMediaById(photographerId);
    displayDataPhotographer(photographer[0]);
    displayDataMedia(photographer[0], photographerMedia);
}
init(photographerId);