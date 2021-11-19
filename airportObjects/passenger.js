class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
        this.bagType = [];
    }

    addBag(bag) {
        this.bags.push(bag);
    }

    travelsWith(bagType) {
        this.bagTypes.push(bagType);
    }

}


module.exports = Passenger;