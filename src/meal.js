function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(item, ingredients){ 
  if(!ingredients.includes(item)){
    return ingredients.push(item)
  } else {
    return ingredients
  }
};

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(initialPrice) {
  return initialPrice * .9
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType, 
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}

