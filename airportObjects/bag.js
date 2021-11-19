
class Bag {
    constructor(weight) {
        this.weight = weight;
    }

    isOverLimit() {
        return this.weight > 20;
    }
}



module.exports = Bag;