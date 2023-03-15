import { menuArray } from "./data.js";
const itemContainer = document.getElementById("item-container")
const checkoutDetails = document.getElementById("checkout-details")
const checkOutArray = []

document.addEventListener("click" ,function(e){
  if (e.target.dataset.add) {
    handleAddBtn(e.target.dataset.add)
  }
})



function handleAddBtn(addBtn) {
document.getElementById("inner-container").classList.remove('hidden')

const filteredObjects = menuArray.filter(function(filter){
     return filter.id == addBtn
})[0]

checkOutArray.push(filteredObjects)
calculateTotalPrice()
renderCheckOut()
}



function calculateTotalPrice(){
  const totalAmount = document.getElementById("total-amount" )
  let totalPrice = 0
  checkOutArray.forEach(function(item){
     totalPrice += item.price
 
   })
 return totalAmount.innerHTML = `$${totalPrice}`
 }
 


function getCheckoutHtml(){
  let checkOutHtml = ``
  checkOutArray.forEach(function(checkOut){
    
    checkOutHtml += `
    <p class="checkout-details"> <span class="item-name">${checkOut.name}</span> <span class="item-amount">$${checkOut.price}</span> </p>
    <br>
    `

  })

  return checkOutHtml

}



function getItemsHtml(menuLists){
  let  itemsHtml = ``
    menuLists.forEach(function(menu){
     itemsHtml += `

     <div class="item">
     <span class="item-emoji">${menu.emoji}</span>
    <div class="item-info">
     <p class="item-title">${menu.name}</p>
     <p class="item-description">${menu.ingredients}</p>
     <p class="item-price">$${menu.price}</p>
    </div>
   <div class="btn-container">
     <button id="add-btn" data-add=${menu.id}>+</button>
    </div>
     </div>
     <br>
     
     `
    })

    return itemsHtml

}


function renderItems(){
  itemContainer.innerHTML = getItemsHtml(menuArray)

}

function renderCheckOut(){
  renderItems()
 checkoutDetails.innerHTML = getCheckoutHtml()
}

renderCheckOut()

