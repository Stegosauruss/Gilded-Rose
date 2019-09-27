var PremiumItem= require('./premiumItem')

class Brie extends PremiumItem {
  updateQuality (item) {
    if (this.sellByPassed(item)) {
      this.increaseQuality(item, 2)
    } else {
      this.increaseQuality(item)
    }
  }
}

module.exports = Brie
