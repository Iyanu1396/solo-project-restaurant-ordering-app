import { menuArray } from "./data.js";
const itemContainer = document.getElementById("item-container")

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


function render(){
  itemContainer.innerHTML = getItemsHtml(menuArray)

}

render()