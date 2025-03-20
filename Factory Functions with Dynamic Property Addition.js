function createInventoryItem(name, category,price){
let obj={}
obj.name=name
obj.category=category
obj.price=price
obj.describeItem = function(){
    console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
}

return obj;
}
function addItemDiscount(inventoryItem, discountPercent){
    const discountedPrice = inventoryItem.price * (1 - discountPercent / 100);
    inventoryItem.applyDiscount = function() {
        console.log(`Discounted Price for ${this.name}: $${discountedPrice}`);
      };
}
const item = createInventoryItem("Laptop", "Electronics", 1500);
console.log(item)
item.describeItem()

addItemDiscount(item, 15); 
item.applyDiscount(); 