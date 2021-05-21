
//when the form is submitted we will be logging the event and modifiying the page 

let nameForm = document.querySelector("#nameForm")
console.log(nameForm)

//add.EventListener signature = ("eventName", callback function)
//callback signature = (eventObject)
nameForm.addEventListener("submit", function(eventObject) {
    //always watch out for this or page will refresh on submit otherwise
    eventObject.preventDefault()
    console.dir(eventObject)
//console.dir tells javascript to list properties

let nameInput = document.querySelector("#name")
//get the value inside the input
let name = nameInput.value
appendParagraph("Welcome " + name)
})

//don't call your callback too early!!!!!

let numForm = document.querySelector("pageForm")
console.log(pageForm)

pageForm.addEventListener("submit", function (eventObject) {
    eventObject.preventDefault()
    let pageInput = document.querySelector("input[type=number]")
    console.log(pageInput)
    let pageNumber = pageInput.value 
    // check you indexing - is page one index 1?
    let page = pages[pageNumber] 
    appendParagraph(page)
})