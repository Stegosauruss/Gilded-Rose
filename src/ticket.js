var PremiumItem = require('./premiumItem')

class Ticket extends PremiumItem {
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
}

module.exports = Ticket
