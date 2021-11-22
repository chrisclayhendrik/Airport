const Airplane = require('./airplane')
const Passenger = require('./passenger')
const Crewmember = require('./crewmember')

describe ('Airplane class', () => {
    const testPlane = new Airplane('Boeing 747')

    test('has a type', () => {
        expect(testPlane.type).toBe('Boeing 747')
    })

    test('can board passengers', () => {
        const testPassenger = new Passenger('John Smith', 2, '123', 'A2')
        testPlane.boardPassenger(testPassenger)
        expect(testPlane.passengers).toContainEqual(testPassenger)
    })

    test('can board crewmembers', () => {
        const testCrewmember = new Crewmember('Sully', 2, 'Captain', '12345')
        testPlane.boardCrewmember(testCrewmember)
        expect(testPlane.crewmembers).toContainEqual(testCrewmember)
    })
    
})