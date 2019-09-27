class Ticket {
  sellByPassed (item) {
    return item.sellIn < 0
  }

  updateQuality (item) {
    if (this.sellByPassed(item)) {
      item.quality = 0
    } else if (item.sellIn < 6) {
      this.increaseQuality(item, 3)
    } else if (item.sellIn < 11) {
      this.increaseQuality(item, 2)
    } else {
      this.increaseQuality(item)
    }
  }

  increaseQuality (item, value = 1) {
    if (this.maxQuality(item, value)) { return item.quality = 50 }

    item.quality += value
  }

  maxQuality (item, value) {
    return item.quality + value >= 50
  }
}

module.exports = Ticket
