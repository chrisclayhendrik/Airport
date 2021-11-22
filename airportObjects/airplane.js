

class Airplane {
    constructor(type) {
        this.type = type;
        this.passengers = [];
        this.crewmembers = [];
    }

    boardPassenger(passenger) {
        this.passengers.push(passenger);
    }

    boardCrewmember(crewmember) {
        this.crewmembers.push(crewmember);
    }
}



module.exports = Airplane;