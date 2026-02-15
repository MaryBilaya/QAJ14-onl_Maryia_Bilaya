import { expect } from "chai";
import { JokesController } from "../helper/jokes-controller";
import { baseUrl } from "../config/constants";

describe('Test Jokes', () => {
   describe('Categories', () => {
    const jokes = new JokesController(baseUrl);

    it('get all categories', async () => { 
        const response = await jokes.getCategories();
        expect(response).to.equal(200);});
    });
});