class Brie {
  sellByPassed (item) {
    return item.sellIn < 0
  }

  updateQuality (item) {
    if (this.sellByPassed(item)) {
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

module.exports = Brie
