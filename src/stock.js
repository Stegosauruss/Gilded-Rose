var UpdateQuality = require('./updateQuality')

class Stock {
  constructor(updateQuality = new UpdateQuality) {
    this.updateQuality = updateQuality
  }

  check(item) {
    this.decreaseSellIn(item)
    this.typeCheck(item)
  }

  decreaseSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

  typeCheck(item) {
    if (this.isBrie(item)) {
      this.updateQuality.brie(item)
    } else if (this.isTicket(item)) {
      this.updateQuality.ticket(item)
    } else if (this.isConjured(item)) {
      this.updateQuality.default(item)
      this.updateQuality.default(item)
    } else {
      this.updateQuality.default(item)
    }
  }

  isTicket(item) {
    return item.name == 'Backstage passes to a TAFKAL80ETC concert'
  }

  isBrie(item) {
    return item.name == 'Aged Brie'
  }

  isConjured(item) {
    return item.name.includes('Conjured')
  }
}

module.exports = Stock