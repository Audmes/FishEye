import { getPhotographerById } from "../pages/photographer.js";

// Affichage du total de Likes
export const displayTotalLikes = async () => {
    const { medias } = await getPhotographerById();
    const allBtnLike = document.querySelectorAll(".btn_like");
    const likesElement = document.querySelector(".photographer_likes_count");

    // Mis à jour du total de likes
    const updateTotalLikes = () => {
        const totalLikes = medias.reduce((acc, media) => acc + media.likes, 0);
        likesElement.textContent = `${totalLikes}`;
    };

    updateTotalLikes();

    // Gestion du bouton like
    allBtnLike.forEach(btn => {
        btn.addEventListener("click", () => {
            const media = medias.find(media => media.id == btn.dataset.id);

            !btn.classList.contains("liked") ? media.likes++ : media.likes--;

            btn.classList.toggle("liked");

            const likesElement = btn.previousElementSibling;
            likesElement.textContent = `${media.likes}`;

            updateTotalLikes();
        });
    });
};