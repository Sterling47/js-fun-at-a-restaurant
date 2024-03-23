function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length < 3){
  deliveryOrders.push(order)
  }
} 

//remove order that has the order number
//

function refundOrder(number, deliveryOrders) {
  // console.log(number, '<>>>>Number')
  // console.log(deliveryOrders,'<>>>> deliveryOrder')
  // console.log(deliveryOrders[0].orderNumber)
  for(var i=0; i < deliveryOrders.length; i++){
    if(number === deliveryOrders[i].orderNumber ){
    return deliveryOrders.splice(i,1)
  }
}
  }
  
function listItems(deliveryOrders) {
  // console.log('delivry<>>>>', deliveryOrders)
  var string = '';
  for(var i=0; i < deliveryOrders.length; i++) {
  string += `${deliveryOrders[i].item}, `
  }
  return string.slice(0,-2)
}

function searchOrder(order, deliveryOrders) { 
  for(var i = 0; i < order.length; i++){

    if(order[i].item === deliveryOrders) {
     return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}