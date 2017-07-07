const newItemInput = document.querySelector("input.newItemInput");
const addItemButton = document.querySelector("button.addItemButton");
const listDiv = document.querySelector ("#list");
const listUl = listDiv.querySelector("ul");
const lis = listUl.children; 
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;
const remove = document.querySelector("button.removeItemButton");
var deleteButton = $("<button/>").addClass("removeItemButton").text("Delete");


$(function(){
$("#addItemButton").on("click", function(){
  let value = $("#newItemInput").val();

  
$(".unList").append("<li>value</li>" , remove);
  });  
});

$("ul").on("click",".Remove", function(){
  $(this).closest("li").remove();
  
})





