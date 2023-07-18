//button click handler
let myNodelist =document.querySelector("li")
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span"); 
    let txt = document.createTextNode(myNodelist("\u00D7"));
    span.className = ("close");
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//create close button
let close = document.getElementById("close");
let index;
for (index = 0; index <myNodelist.length; index++) {
    close[index].onclick = function(){
        var div =this.parentElement;
        div.style.display = "none";
    }
}

// checked clickings
let list = document.querySelector("ul")
list.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

//create a new list element with add click button
function newElement() {
    let li =document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("Please enter something");
    }else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value ="";
    let span = document.createTextNode("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(span);
    li.appendChild(span);
    
    for (let index = 0; index < close.length; index++) {
        cclose[index].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
        
    }
}



