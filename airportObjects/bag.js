
class Bag {
    constructor(weight) {
        this.weight = weight;
        this.bagType = null;
    }

    isOverLimit() {
        return this.weight > 20;
    }
}



module.exports = Bag;