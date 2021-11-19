class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }

    addBag(bag) {
        this.bags.push(bag);
    }

    travelsWith(bag) {
        this.bag = bag;
    }

}


module.exports = Passenger;