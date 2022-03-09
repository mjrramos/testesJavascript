const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect

describe('Math Class', function(){
    //hooks
    this.beforeEach(function(){
        value = 0;
    })

    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000)

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10)
            done()
        })
    });

    it('Multiply two numbers', function(){
        value = 5
        const math = new Math();
        expect(math.multiply(value, 0)).to.equal(0)
    })

    it('Property object', function(){
        const obj = {
            name: 'Junior'
        }
        const obj2 = {
            name: 'Junior'
        }
        //expect(obj).to.have.property("name").to.equal('Junior')
        expect(obj).to.deep.equal(obj2)
    })

});