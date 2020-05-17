export async function getCategories() {
  const promise = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await promise.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const promise = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await promise.json();
  return response;
}


