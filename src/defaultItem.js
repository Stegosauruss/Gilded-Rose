class DefaultItem {
  sellByPassed (item) {
    return item.sellIn < 0
  }

  updateQuality (item) {
    if (this.sellByPassed(item)) {
      this.decreaseQuality(item, 2)
    } else {
      this.decreaseQuality(item)
    }
  }

  decreaseQuality (item, value = 1) {
    if (this.minQuality(item, value)) { return item.quality = 0 }

    item.quality -= value
  }

  minQuality (item, value) {
    return item.quality - value <= 0
  }
}

module.exports = DefaultItem
