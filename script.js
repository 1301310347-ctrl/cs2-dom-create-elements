
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
    let userLastName = prompt("ENter your last name buddy");

    addName(userName, userLastName);
    addSeperator();
    
}

function addName(newName, lastName) {
    console.log("username");
    let dameDame = document.createElement("h2");
    dameDame.innerText = newName + ","+ lastName;
    document.body.appendChild(dameDame);
}

function addSeperator() {
    let lineBreak = document.createElement("hr");
    document.body.appendChild(lineBreak);
}