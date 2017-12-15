const kinematic =  require('../kinematic');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('Modulo Kinematic para funciones de cinematica', function () {
  context('Funcion de distancia en base a velocidad inical, aceleracion y tiempo', function () {
    it('SHOULD return the correct value for the supplied parammetters', function () {
      const vi = 0;
      const a = 10;
      const t = 10;
      const distancia = kinematic.distancia1(vi, a, t);
      assert.equal(distancia, 50);
      expect(distancia).to.equal(50);
      distancia.should.equal(50);
    });

    it('SHOUlD return null for missing parrametters', function () {
      const vi = 0;
      const a = 10;
      const distancia = kinematic.distancia1(vi, a);
      assert.strictEqual(distancia, null);
      expect(distancia).to.equal(null);
    })
  })
})