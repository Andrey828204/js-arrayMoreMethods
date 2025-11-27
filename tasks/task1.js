function getPopularCategories(products) {
  const filtered = products.filter(item => item.sales > 5);

  const sorted = [...filtered].sort((a, b) => b.sales - a.sales);

  const categories = sorted.map(item => item.category);

  return [...new Set(categories)];
}

module.exports = getPopularCategories;
