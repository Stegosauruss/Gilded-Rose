var Item = require('../src/item.js')
var Shop = require('../src/shop.js')

describe('Gilded Rose', function () {
  describe('Default Item', () => {
    it('a default item updates quantity correctly', function () {
      const sausage = new Item('sausages', 10, 10)
      const gildedRose = new Shop([sausage])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('sausages', 9, 9))
    })

    it('quality should never drop below 0', function () {
      const sausage = new Item('sausages', -3, 1)
      const gildedRose = new Shop([sausage])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('sausages', -4, 0))
    })

    it('quality decreases by 2 after sell by date', function () {
      const sausage = new Item('sausages', -5, 10)
      const gildedRose = new Shop([sausage])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('sausages', -6, 8))
    })
  })

  describe('Aged Brie', () => {
    it('aged brie updates quantity correctly', function () {
      const brie = new Item('Aged Brie', 10, 10)
      const gildedRose = new Shop([brie])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Aged Brie', 9, 11))
    })

    it('aged brie should not increase beyond 50', function () {
      const brie = new Item('Aged Brie', 10, 50)
      const gildedRose = new Shop([brie])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Aged Brie', 9, 50))
    })

    it('aged brie increases by 2 after sell by date', function () {
      const brie = new Item('Aged Brie', -1, 30)
      const gildedRose = new Shop([brie])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Aged Brie', -2, 32))
    })
  })

  it('sulfuras does not change quality or sellby', function () {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 10, 10)
    const gildedRose = new Shop([sulfuras])
    const items = gildedRose.updateStock()
    expect(items[0]).toEqual(new Item('Sulfuras, Hand of Ragnaros', 10, 10))
  })

  describe('Backstage Passes', () => {
    it('update quantity correctly up to 10 days', function () {
      const ticket = new Item('Backstage passes to a TAFKAL80ETC concert', 20, 10)
      const gildedRose = new Shop([ticket])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Backstage passes to a TAFKAL80ETC concert', 19, 11))
    })

    it('update quantity correctly up to 5 days', function () {
      const ticket = new Item('Backstage passes to a TAFKAL80ETC concert', 7, 10)
      const gildedRose = new Shop([ticket])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Backstage passes to a TAFKAL80ETC concert', 6, 12))
    })

    it('update quantity correctly up to 0 days', function () {
      const ticket = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 10)
      const gildedRose = new Shop([ticket])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Backstage passes to a TAFKAL80ETC concert', 3, 13))
    })

    it('update quantity correctly after concert', function () {
      const ticket = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)
      const gildedRose = new Shop([ticket])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0))
    })

    it('quality cannot go beyond 50', function () {
      const ticket = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49)
      const gildedRose = new Shop([ticket])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50))
    })
  })

  describe('Conjured Item', () => {
    it('a conjured item updates quantity correctly', function () {
      const conjured = new Item('Conjured Sausages', 10, 10)
      const gildedRose = new Shop([conjured])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Conjured Sausages', 9, 8))
    })

    it('quality should not drop below 0', function () {
      const conjured = new Item('Conjured Mana Cakes', 10, 1)
      const gildedRose = new Shop([conjured])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Conjured Mana Cakes', 9, 0))
    })

    it('a conjured item updates quantity correctly', function () {
      const conjured = new Item('Conjured Rat Tails', 0, 10)
      const gildedRose = new Shop([conjured])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Conjured Rat Tails', -1, 6))
    })

    it('conjured brie updates quantity correctly', function () {
      const conjuredBrie = new Item('Conjured Aged Brie', 0, 10)
      const gildedRose = new Shop([conjuredBrie])
      const items = gildedRose.updateStock()
      expect(items[0]).toEqual(new Item('Conjured Aged Brie', -1, 14))
    })
  })
})
