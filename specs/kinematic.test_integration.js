var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var chaiHttp = require('chai-http');
var server = require('../server')
chai.use(chaiHttp);


describe('GET /measure', function () {
  context('WHEN simulation has been requested', function () {
    before(function () {

    })
    beforeEach()
    it('SHOULD retrieve an array of messurements in 180 seconds', function () {
      // chai.request(server)
      //   .get('/measure')
      //   .send()
      //   .end(function (err, res) {
      //     expect(err).to.be.null;
      //     expect(res).to.have.status(200)
      //     // Completar los test y el endpoint del enunciado
      //     done()
      //   })
    })
  })

})