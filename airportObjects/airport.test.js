const Airport = require('./airport');
const Plane = require('./plane');
const Passenger = require('./passenger');
const Bag = require('./bag');
const Crewmember = require('./crewmember');


describe('Airport class', () => {
    test('has name', () => {
        const airport = new Airport('Tokyo');
        expect(airport.name).toBe('Tokyo');
    })
})


describe('Plane class', () => {
    test('has type', () => {
        const plane = new Plane('Boeing 747');
        expect(plane.type).toBe('Boeing 747');
    })
    test('has passenger', () => {
        const plane = new Plane('Boeing 747');
        expect(plane.passengers).toEqual([]);
    })
    test('lands at airport', () => {
        const plane = new Plane('Boeing 747');
        const airport = new Airport('Tokyo');
        plane.landsAt(airport);
    })
    test('takes off from airport', () => {
        const plane = new Plane('Boeing 747');
        const airport = new Airport('Tokyo');
        plane.takeOff(airport);
    })
    test('transports passengers', () => {
        const plane = new Plane('Boeing 747');
        const airport = new Airport('Tokyo');
        const passenger = new Passenger('Chris');
        plane.transports(passenger);
    })
})


describe('Passenger class', () => {
    test('has name', () => {
        const passenger = new Passenger('Chris', 54321, '1A');
        expect(passenger.name).toBe('Chris');
    })
    test('has passport number', () => {
        const passenger = new Passenger('Chris', 54321, '1A');
        expect(passenger.passportNumber).toBe(54321);
    })
    test('has seatNumber', () => {
        const passenger = new Passenger('Chris', 54321, '1A');
        expect(passenger.seatNumber).toBe('1A');
    })
    test('has bags', () => {
        const passenger = new Passenger('Chris', 54321, '1A');
        expect(passenger.bags).toEqual([]);
    })
    test('has bag type', () => {
        const passenger = new Passenger('Chris', 54321, '1A');
        expect(passenger.bagType).toEqual([]);
    })
})


describe('Bag class', () => {
    test('has a weight', () => {
        const bag = new Bag(40);
        expect(bag.weight).toEqual(40);
    })
    test('isOverLimit', () => {
        const bag = new Bag(40);
        expect(bag.isOverLimit()).toBe(true);
    })
})


describe('Crewmember class', () => {
    test('has name', () => {
        const crewmember = new Crewmember('Sully', 'Pilot', 12345);
        expect(crewmember.name).toBe('Sully');
    })
    test('is a Pilot', () => {
        const crewmember = new Crewmember('Sully', 'Pilot', 12345);
        expect(crewmember.position).toStrictEqual('Pilot');
    })
    test('has staff number', () => {
        const crewmember = new Crewmember('Sully', 'Pilot', 12345);
        expect(crewmember.staffNumber).toBe(12345);
    })
    test('has bag type', () => {
        const crewmember = new Crewmember('Sully', 'Pilot', 12345);
        const bag = new Bag(20);
        crewmember.travelsWith(bag);
        expect(crewmember.bag).toStrictEqual(bag);
    })
    test('is allocated to plane', () => {
        const crewmember = new Crewmember('Sully', 'Pilot', 12345);
        const plane = new Plane('Boeing 747');
        crewmember.isAllocatedTo(plane);
        expect(crewmember.plane).toStrictEqual(plane);
    })
})