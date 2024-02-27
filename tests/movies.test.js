const request = require ("supertest");

const app = require ("../app");

describe ("GET /api/movies", () => {
it ("should return all movies", async () => {
    const response = await request (app).get ("/api/movies");

    expect (response.headers ["content-type"]).toMatch (/json/);
    expect (response.status).toEqual(200);
});
});

describe ("GET /api/movies/:id", () => {
    //teste para o ID existente (por exemplo, 1)
    it ("should return movie by id with status 200", async () => {
        const response = await request (app).get ("/api/movies/1");

        expect (response.headers ["content-type"]).toMatch (/json/);
        expect (response.status).toEqual(200);
    });

    //teste para o id inexistente (0 por exemplo)
    it ("should return 404 for non-existent id", async () => {
        const response = await request (app).get ("/api/movies/0");

        expect (response.status).toEqual(404);
    });
});