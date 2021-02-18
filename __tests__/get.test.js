const { app } = require('../app.js');
const supertest = require('supertest');
const { request } = require('express');
const requrest = supertest(app);

it('gets the test endpoint', async done => {
    const planetsData = [
        {
            'id': 1,
            'planet': 'mercury',
            'class': 'terrestrial',
            'diameter': 4880,
            'gravity': 0.4,
            'magnetic_field_strong': false,
        }
    ]

    const response = await request.get('/test')

    expect(response.status).toBe(554)
    expect(response.body.message).toEqual(planetsData)
    done()
})