const { app } = require('../app.js');
const supertest = require('supertest');
//const { request } = require('express');
const { planets } = require('../data.js');
const request = supertest(app);

// it('should return a response inlcuding all planets', async done => {
//     const planetsData = [
//         {
//             'id': 1,
//             'planet': 'mercury',
//             'class': 'terrestrial',
//             'diameter': 4880,
//             'gravity': 0.4,
//             'magnetic_field_strong': false,
//         }
//     ]

//     const response = await request.get('/planets')

//     expect(response.status).toBe(200)
//     expect(response.body).toEqual({ results: planets })
//     done()
// })


it('should return a response inlcuding all planets', async done => {
    const expectation = {
        results: planets
    };

    const response = await request.get('/planets');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectation);
    done();
});