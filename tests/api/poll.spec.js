import chai from 'chai';
import chaiHttp from 'chai-http';
let assert = chai.assert;
chai.use(chaiHttp);
import {describe, beforeEach, afterEach, it} from 'mocha';

let app = require('./../../index');

describe('Polls', () => {
    describe('GET /api/polls', () => {
        it('it should GET all the polls', (done) => {
            chai.request(app).get('/api/polls')
                .end((err, res) => {
                    assert.equal(err, null);
                    assert.equal(res.status, 200);
                    assert.typeOf(res.body.polls, 'array', 'returns an array of polls');
                    assert.lengthOf(res.body.polls, 2, 'returns no polls');
                    done();
                });
        });
    });

    describe('POST /api/auth/register', () => {
        it('it should GET all the polls', (done) => {
            chai.request(app).post('/api/auth/register')
                .send({ email: 'leonardo_taha@yahoo.com', firstName: 'Leonardo', lastName: 'Taha', password: '111111' })
                .end((err, res) => {
                    console.log(res.body);
                    assert.equal(err, null);
                    assert.equal(res.status, 201);
                    done();
                });
        });
    });
});