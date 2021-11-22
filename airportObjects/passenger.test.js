const Passenger = require('./passenger')
const Person = require('./person')

describe('Passenger class', () => {
    test('is an instance of a Person', () => {
        const passenger = new Passenger('Chris', 20, '54321', '1A')
        expect(passenger).toBeInstanceOf(Person)
    })

    test('has a name', () => {
        const passenger = new Passenger('Chris', 20, '54321', '1A')
        expect(passenger.name).toBe('Chris')
    })

    test('has bags', () => {
        const passenger = new Passenger('Chris', 20, '54321', '1A')
        expect(passenger.bags).toEqual([])
    })

    test('has a seat number', () => {
        const passenger = new Passenger('Chris', 20, '54321', '1A')
        expect(passenger.seatNumber).toBe('1A')
    })

    test('has a passport number', () => {
        const passenger = new Passenger('Chris', 20, '54321', '1A')
        expect(passenger.passportNumber).toBe('54321')
    })

    test('can call attendant', () => {
        const passenger = new Passenger('Chris', 20, '54321', '1A')
        expect(passenger.callAttendant()).toBe();
    })

})

    

