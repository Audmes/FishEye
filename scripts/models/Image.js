import Media from "./Media.js";

export default class Image extends Media {
    constructor(data) {
        super(data); // L’utilisation de super() permet de passer des paramètres, ici en l'occurrence l’URL, à la classe  Media  .
        this.image = data.image;
    }
};