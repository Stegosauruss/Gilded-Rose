var Stock = require('./stock')

class Shop {
  constructor (items = [], stock = new Stock()) {
    this.items = items
    this.stock = stock
  }

  updateStock () {
    var self = this
    this.items.forEach(function (item) {
      if (self.isSulfuras(item)) return

      self.stock.check(item)
    })
    return self.items
  }

  isSulfuras (item) {
    return item.name.includes('Sulfuras, Hand of Ragnaros')
  }
}

module.exports = Shop
