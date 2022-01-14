var getCelcius = require('../libraries/getCelcius')
var  expect = require('chai').expect

describe('getCelcius', function(){
    it('convert farenheit to celcius', function () {
        expect(getCelcius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    })
})