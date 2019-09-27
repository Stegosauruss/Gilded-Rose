class DefaultItem {
  sellByPassed (item) {
    return item.sellIn < 0
  }
}

module.exports = DefaultItem