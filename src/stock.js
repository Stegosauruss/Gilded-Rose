var DefaultItem = require('./defaultItem')
var Brie = require('./brie')
var Ticket = require('./ticket')

class Stock {
  constructor (defaultItem = new DefaultItem(), brie = new Brie(), ticket = new Ticket()) {
    this.defaultItem = defaultItem
    this.brie = brie
    this.ticket = ticket
  }

  check (item) {
    this.decreaseSellIn(item)
    if (this.isConjured(item)) {
      this.typeCheck(item)
      this.typeCheck(item)
    } else {
      this.typeCheck(item)
    }
  }

  decreaseSellIn (item) {
    item.sellIn = item.sellIn - 1
  }

  typeCheck (item) {
    if (this.isBrie(item)) {
      this.brie.updateQuality(item)
    } else if (this.isTicket(item)) {
      this.ticket.updateQuality(item)
    } else {
      this.defaultItem.updateQuality(item)
    }
  }

  isTicket (item) {
    return item.name.includes('Backstage passes to a TAFKAL80ETC concert')
  }

  isBrie (item) {
    return item.name.includes('Aged Brie')
  }

  isConjured (item) {
    return item.name.includes('Conjured')
  }
}

module.exports = Stock
