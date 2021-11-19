

class Plane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
    }

    board(passenger) {
        this.passengers.push(passenger);
    }

    landsAt(airport) {
        this.airport = airport;
    }

    takeOff(airport) {
        this.airport = airport;
    }
    transports(passenger) {
        this.passengers.push(passenger);
    }
}



module.exports = Plane;