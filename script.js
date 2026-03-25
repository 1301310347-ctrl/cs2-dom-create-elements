
console.log("script started");

function start() {
    console.log("click");

    //create heading list 

    let heading = document.createElement("h1");
    ///set some text of the heading 

    heading.innerText = "Attendance";
    
    //setting some style 
    heading.style.color = "green";
    heading.style.textDecoration = "underline";
    //add heading to the page
    document.body.appendChild(heading);

    //prompt for name 
    let userName = prompt("ENTER your name");
    
}

function addName(newName) {
    console.log("username");
    let userName = newName;
    

}