export default class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url){
        this.url = url;
    }
    async get(){
        try{
            const response = await fetch(this.url);
            const data = await response.json();
            return data;
        } catch(err){
            throw new Error(err);
        }
    }
};