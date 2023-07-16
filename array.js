//Array
// array olusturma
let domains = "kodluyoruz"
let isActive = false
let items =[1, 2, 3,  isActive, domains]
console.log(items);


let emptyArray = [] // bos liste
//Array içindeki eleman ekleme ve sayisini gösterme
console.log(
    items.length
);

//Array içindeki ilk elemanın cagrılması
console.log(
    items[0]
);

//Array içindeki son elemanın cagrılması
console.log(
    items[items.length - 1]
);

// degisken içindeki bilginin array olup olmadığının kontroll
console.log(
    typeof(items) // object type
);

console.log(
    Array.isArray(items) // true veriyor
);

//hangieri isArray bilgisidir true verir

console.log(
   "[] :" , Array.isArray(   []  )
);


console.log(
   "1 : ", Array.isArray(   (1)  )
);


console.log(
   "true : ", Array.isArray(   (true)  )
);

// array içindeki ortadaki elemanı bulma
console.log(
    items[ Math.floor(items.length / 2) ]
);
 let item = [10, 20, 30, 40,]
 console.log("items- ilk hali", item);
//array sona eleman ekleme => push ile
item.push(50)
console.log("50:", item)

//array basa eleman ekleme => unshift ile

//array bastaki elemanı cagırma => shift ile