import { menuArray } from "./data.js";
const itemContainer = document.getElementById("item-container")
const checkoutDetails = document.getElementById("checkout-details")

document.addEventListener("click" ,function(e){
  if (e.target.dataset.add) {
    handleAddBtn(e.target.dataset.add)
  }
 
})

function handleAddBtn(addBtn) {

  console.log(addBtn)
  
}


function getCheckoutHtml(){
  let checkOutHtml = ``
  const checkOutArray = []
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