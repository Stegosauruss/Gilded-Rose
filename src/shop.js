class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    var self = this;
    self.items.forEach( function(item) {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            self.decreaseQuality(item);
          }
        }
      } else {
        self.increaseQuality(item);
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            self.increaseQuality(item)
          }
          if (item.sellIn < 6) {
            self.increaseQuality(item)
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              self.decreaseQuality(item);
            }
          } else {
            item.quality = 0;
          }
        } else {
          self.increaseQuality(item)
        }
      }
    }) 
    return self.items;
  }

  increaseQuality(item) {
    if(this.MaxQuality(item)) return

    item.quality = item.quality + 1;
  }

  decreaseQuality(item) {
    if(this.isSulfuras(item)) return
    
    item.quality = item.quality - 1;
  }

  MaxQuality(item) {
    return item.quality >= 50
  }

  isSulfuras(item) {
    item.name == 'Sulfuras, Hand of Ragnaros'
  }
}

module.exports = Shop