var DefaultItem = require('./defaultItem')

class PremiumItem extends DefaultItem {
  sellByPassed (item) {
    return item.sellIn < 0
  }

  increaseQuality (item, value = 1) {
    if (this.maxQuality(item, value)) { return item.quality = 50 }

    item.quality += value
  }

  maxQuality (item, value) {
    return item.quality + value >= 50
  }
}

module.exports = PremiumItem
