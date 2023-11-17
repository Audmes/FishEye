//Mettre le code JavaScript lié à la page photographer.html
let photographerId = window.location.search;
photographerId = photographerId.slice(4);
// console.log(photographerId);

const getData = async () => {
    // Récupère les datas des photographes
    const response = await fetch('data/photographers.json');
    if (response.ok) { // if HTTP-status is 200-299
        const data = await response.json();
        // console.log(data);
        return data;
    }else {
        console.log("HTTP-Error: " + response.status);
    } 
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

async function displayData(photographer, media) {
    // Disposition des données du photographe
    const photographerHeader = document.querySelector(".photograph-header");
    const photographerSection = document.querySelector(".photographer-media_section");
    const photographerInfo = document.querySelector(".photographer-info");
    // const { name } = photographer[0];
    // console.log({name});

    const photographerModel = photographerHeaderTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographerHeader.appendChild(userCardDOM);

    const photographerInfoModel = photographerInfoTemplate(photographer);
    const userInfoDOM = photographerInfoModel.getUserInfoDOM();
    photographerInfo.appendChild(userInfoDOM);

    // Disposition des données médias du photographe
    media.forEach((data) => {
        const photographerModel = photographerMediaTemplate(photographer, data);
        const userMediaDOM = photographerModel.getUserMediaDOM();
        photographerSection.appendChild(userMediaDOM);
        // console.log(data);
    });
}

async function init(photographerId) {
    // Récupère les datas du photographe
    const photographer = await getPhotographerById(photographerId);
    const media = await getPhotographerMediaById(photographerId);
    displayData(photographer[0], media);
}
init(photographerId);