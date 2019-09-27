class UpdateQuality {
  sellByPassed(item) {
    return item.sellIn < 0
  }

  brie(item) {
    if(this.sellByPassed(item)) { 
      this.increaseQuality(item, 2) 
    } else {
      this.increaseQuality(item)
    }
  }

  ticket(item) {
    if(this.sellByPassed(item)) { 
      item.quality = 0 
    } else if (item.sellIn < 6) {
      this.increaseQuality(item, 3)
    } else if (item.sellIn < 11) {
      this.increaseQuality(item, 2)
    } else {
      this.increaseQuality(item)
    }
  }

  default(item) {
    if(this.sellByPassed(item)) { 
      this.decreaseQuality(item, 2)
    } else {
      this.decreaseQuality(item)
    }
  }

  increaseQuality(item, value = 1) {
    if(this.maxQuality(item, value)) { return item.quality = 50 }

    item.quality += value;
  }

  decreaseQuality(item, value = 1) {
    if(this.minQuality(item, value)) { return item.quality = 0 }

    item.quality -= value;
  }

  maxQuality(item, value) {
    return item.quality + value >= 50
  }

  minQuality(item, value) {
    return item.quality - value <= 0
  }
}

module.exports = UpdateQuality

