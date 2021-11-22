const Person = require('./person')
const Crewmember = require('./crewmember')

describe('Crewmember class', () => {
    const testCrewmember = new Crewmember('Sully', 2, 'Captain', '12345')

    test('is an instance of a Person', () => {
        const crewmember = new Crewmember('Sully', 2, 'Captain', '12345')
        expect(crewmember).toBeInstanceOf(Person)
    })

    test('has a name', () => {
        expect(testCrewmember.name).toBe('Sully')
    })

    test('has bags', () => {
        expect(testCrewmember.bags).toEqual([])
    })

    test('has a position', () => {
        expect(testCrewmember.position).toBe('Captain')
    })

    test('has a staff number', () => {
        expect(testCrewmember.staffNumber).toBe('12345')
    })
})

