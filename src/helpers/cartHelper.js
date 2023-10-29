export const addToCartHelper = (product,cart,user, quantity=false ) => {
    // console.log(product,cart,user);
let newCartObject = {
    ...cart
}

if(newCartObject.items.length > 0) {

   let productExist = newCartObject.items.find(item=> item.id === product.id)
   let productExistIndex = newCartObject.items.findIndex(item=> item.id === product.id)
    // console.log(productExist);
  if(productExist) {
if(quantity){
  if(product.quantity === 0) {
    //splice the item or remove the item if its value is reduced to zero
    newCartObject.items.splice(productExistIndex,1);

  }else{

    productExist.quantity = product.quantity;
  newCartObject.items.splice(productExistIndex,1,productExist)

  }

}else{

  productExist.quantity += 1;
  newCartObject.items.splice(productExistIndex,1,productExist)
}
  }else{
    newCartObject.items.push({...product,quantity:1})
  }

}else{

    //first time add to cart
    newCartObject.items.push({...product , quantity : 1});
}


newCartObject.subTotal = 0;
newCartObject.tax = 0;
newCartObject.grandTotal = 0;


for (const item of newCartObject.items) {
    newCartObject.subTotal += (+item.final_price * item.quantity);
    newCartObject.tax   += ((+item.final_price * 0.16))
    newCartObject.grandTotal += (+item.final_price *item.quantity + newCartObject.tax);
    // newCartObject.grandTotal += (+item.final_price *item.quantity );

    
}
newCartObject.user = user;

return newCartObject;
}