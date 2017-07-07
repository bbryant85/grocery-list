const newItemInput = document.querySelector("input.newItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const listDiv = document.querySelector ("#list");
const listUl = listDiv.querySelector("ul");
const lis = listUl.children; 
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

$("#addItemButton").on("click", function(){
  let value = $(this).val(); 
});

$("#list .unList").val(newItemInput)

$(".unList .remove").on("click" function(){
  if(event.target.tagName == "BUTTON"){
    if(event.target.tagName == "REMOVE"){
      
    }
  }
});