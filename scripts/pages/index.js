    // Page Index
    async function getPhotographers() {
        // Récupère les datas des photographes
        const response = await fetch('data/photographers.json');
        if (response.ok) {
            const photographers = await response.json();
            // console.log(photographers);
            return photographers;
        }else {
            console.log("HTTP-Error: " + response.status);
        } 
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    init();