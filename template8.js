let greeting = document.querySelector("#greeting");
greeting.addEventListener("click", domClick)

function domClick() {
    console.log("tiklandi")
    this.style.color == "red" ? this.style.color = "green" : this.style.color = "red"

}