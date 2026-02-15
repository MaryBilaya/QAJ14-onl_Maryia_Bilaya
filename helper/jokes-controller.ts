import { baseUrl } from "../config/constants";
import superagent from "superagent";

export class JokesController {
    private jokesUrl: string

    constructor (baseUrl: string) {
        this.jokesUrl = baseUrl + "jokes/categories"
    }

    async getCategories() {
        const url = this.jokesUrl + "/categories"
        return superagent.get(url)
    }
}

