class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateStock() {
    var self = this;
    this.items.forEach( function(item) {
      if (self.isSulfuras(item)) return

      self.update(item)
    }) 
    return self.items;
  }

  update(item) {
    this.decreaseSellIn(item)
    this.updateQuality(item)
  }

  decreaseSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

  updateQuality(item) {
    if (this.isBrie(item)) {
      this.updateBrie(item)
    } else if (this.isTicket(item)) {
      this.updateTicket(item)
    } else if (this.isConjured(item)) {
      this.updateDefault(item)
      this.updateDefault(item)
    } else {
      this.updateDefault(item)
    }
  }

  updateBrie(item) {
    this.increaseQuality(item)
    if(this.sellByPassed(item)) { this.increaseQuality(item) }
  }

  updateTicket(item) {
    if(this.sellByPassed(item)) { 
      item.quality = 0 
    } else if (item.sellIn < 6) {
      this.increaseQuality(item)
      this.increaseQuality(item)
      this.increaseQuality(item)
    } else if (item.sellIn < 11) {
      this.increaseQuality(item)
      this.increaseQuality(item)
    } else {
      this.increaseQuality(item)
    }
  }

  updateDefault(item) {
    if(this.sellByPassed(item)) { 
      this.decreaseQuality(item) 
      this.decreaseQuality(item)
    } else {
      this.decreaseQuality(item)
    }
  }

  increaseQuality(item) {
    if(this.maxQuality(item)) return

    item.quality += 1;
  }

  decreaseQuality(item) { 
    if (this.minQuality(item)) return

    item.quality -= 1;
  }

  maxQuality(item) {
    return item.quality >= 50
  }

  minQuality(item) {
    return item.quality <= 0
  }

  isSulfuras(item) {
    return item.name == 'Sulfuras, Hand of Ragnaros'
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

  sellByPassed(item) {
    return item.sellIn < 0
  }
}

module.exports = Shop