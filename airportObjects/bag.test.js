const Bag = require('./bag')

describe('Bag class', () => {
    
    test('has a weight', () => {
        const testBag = new Bag(12)
        expect(testBag.weight).toEqual(12)
    })
    test('throws error', () => {
        expect(() => {
            const testBag = new Bag(0)
        }).toThrow('bag must have a weight')
    })
})