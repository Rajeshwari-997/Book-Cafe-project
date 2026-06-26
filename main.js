

let addButton=document.querySelector(".btn")
let cancelbutton=document.querySelector(".cancel-btn")
let transscreen=document.querySelector(".trans-screen")
let popup_box=document.querySelector(".popupbox")
addButton.addEventListener("click",function()
{
transscreen.style.display="block"
popup_box.style.display="block"
})
cancelbutton.addEventListener("click",function()
{
   transscreen.style.display="none"
popup_box.style.display="none" 
})
//select submit button,container,book title,author and content
let submitButton=document.querySelector(".submit-btn")
let container=document.querySelector(".container")
let bookTitle=document.querySelector(".book-title")
let bookAuthor=document.querySelector(".book-author")
let bookContent=document.querySelector(".about-book")
let deleteButton=document.querySelector(".deleteButton")
submitButton.addEventListener("click",function()
{
    if(bookTitle.value.trim()===""||bookAuthor.value.trim()===""||bookContent.value.trim()==="")
{
    alert("Please Fill All the Fields")
    return 
}
    let newElement=document.createElement("div")
    newElement.setAttribute("class","inside-container")
    newElement.innerHTML=(`<h1>${bookTitle.value}</h1>
    <h3>${bookAuthor.value}</h3>
    <p>${bookContent.value}</h3>
    <button onclick="deleteItem(event)">Delete</button>`)
    container.append(newElement)
    transscreen.style.display="none"
popup_box.style.display="none"

    

})
function deleteItem(event){
    event.target.closest(".inside-container").remove()
}

