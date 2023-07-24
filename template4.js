let price =100

let user = "user"


//eşitse 
console.log("==:", price == 1)    //eşitse yani veri değeri ya da sayı eşit çıkarsa => true
console.log("==:", price == 100)

//hem değeri hem de türü eşitse
console.log("===:", price ===1)  //yani string olan şey ve yazılan kelime olması gibi => true
console.log("===:", price ===100)   

//küçükse
console.log("<:", price < 1) // mesela benim sayım 100 ve 1 de yüzden kücük oldugu icin => true
console.log("<:", price< 100) // burada false doner

//küçük ve eşitse
console.log("<=:", price <= 1)  // buradaki price sayım küçük oldupu için => true
console.log("<=:", price <= 100) // buradaki price sayım da 100 e eşit olduğu için => true

//büyükse
price = 100
console.log(">:", price > 1)   //buradaki price sayım büyük oldupu için => true
console.log(">:", price > 100) //buradaki price sayım aynı  oldupu için => false

//büyük ve eşit
console.log(">=:", price >= 1)    //buradaki price sayım büyük oldupu için => true
console.log(">=:", price >= 100)  //buradaki price sayım büyük oldupu için => true

// ve
console.log("&&:", price && user.password ==10) //price ve user password un ikisi de doğru ifade verrdiğinde (aynı ifade) => false

//veya
console.log("||:", price || user.password == 1000) // price veya user password 1000 ise => true

// "!" değil , tersi
console.log("!:", !user == "Asena") // user Asena değilse => true

