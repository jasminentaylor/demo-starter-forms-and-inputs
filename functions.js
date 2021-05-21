
// use string argument to create and append <p> tag to the story output article element 

let storyDisplay = document.querySelector("#storyDisplay")

console.log(storyDisplay)

let appendParagraph = function(string) {
    let paragraph = document.createElement("p")
    paragraph.append(string)
    storyDisplay.append(paragraph)
}

appendParagraph(pages[0])

//line order = 4, 6, 8, 14, 9, 10, 11
