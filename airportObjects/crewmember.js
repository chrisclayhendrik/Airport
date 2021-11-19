
class Crewmember {
    constructor(name, position,staffNumber) {
        this.name = name;
        this.position = position;
        this.staffNumber = staffNumber;
        this.bag = [];
        this.plane = null;
    }

    travelsWith(bag) {
        this.bag = bag;
    }
    isAllocatedTo(plane) {
        this.plane = plane;
    }
}



module.exports = Crewmember;