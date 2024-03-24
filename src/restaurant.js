function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
};


function addMenuItem(pizzaRestaurant, menuItem) {
  if(!pizzaRestaurant.menus[menuItem.type].includes(menuItem)){
    pizzaRestaurant.menus[menuItem.type].push(menuItem)
  } 
};

function removeMenuItem(pizzaRestaurant, menuItem, menuItemType) {
  // console.log('param1', pizzaRestaurant)
  // console.log('param2', menuItem)
  // console.log('param3', menuItemType)
  var indexItem = pizzaRestaurant.menus[menuItemType].findIndex(function(itemMenu){
    return itemMenu.name === menuItem
  })
  if(indexItem !== -1) {
    pizzaRestaurant.menus[menuItemType].splice(indexItem, 1)
    return `No one is eating our ${menuItem} - it has been removed from the ${menuItemType} menu!`
  } else {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  }
};

function checkForFood(foodConfirmation, item) {
  var indexItem = foodConfirmation.menus[item.type].findIndex(function(itemMenu){
    return itemMenu.name === item.name
    }
  )
  if(indexItem !== -1) {
    return `Yes, we're serving ${item.name} today!`
  } else {
    return `Sorry, we aren't serving ${item.name} today.`
  }
};

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}