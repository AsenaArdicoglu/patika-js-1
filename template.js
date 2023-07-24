let username = "Asena"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

let info = `
Merhaba ${username} sitemize hos geldiniz
mail adaresiniz: ${email}

mail adresinizin uzunlugu: ${email.length}
borcunuz: ${(2+4)*10} TL
gunun saat bilgisi: ${new Date().getHours()}
kisa isminiz:${username[0]}.
`
console.log(info)

let lastChild = document.querySelector("ul#list2>li:first-child")
lastChild.innerHTML = "ilk oge eklendi"

let ulDOM = document.querySelector("ul#list2")
let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi yazım"
//ulDOM.append(liDOM)//

ulDOM.prepend(liDOM)

