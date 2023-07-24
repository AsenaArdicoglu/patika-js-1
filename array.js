//Array
// array olusturma
let domains = "kodluyoruz"
let isActive = false
let itemms =[1, 2, 3,  isActive, domains]
console.log(itemms);


// let emptyArray = [] // bos liste
// Array içindeki eleman ekleme ve sayisini gösterme
console.log(
    itemms.length
);

// Array içindeki ilk elemanın cagrılması
console.log(
    itemms[0]
);

// Array içindeki son elemanın cagrılması
console.log(
    itemms[itemms.length - 1]
);

// degisken içindeki bilginin array olup olmadığının kontroll
console.log(
    typeof(itemms) // object type
);

console.log(
    Array.isArray(itemms) // true veriyor
);

// hangieri isArray bilgisidir true verir

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
    itemms[ Math.floor(itemms.length / 2) ]
);



 let item = [10, 20, 30, 40,]
 console.log("items- ilk hali", item);

// array sona eleman ekleme => push ile
item.push(50)
console.log("50:", item)

// array basa eleman ekleme => unshift ile
item.unshift(112)
console.log("112:", item);

// array sondaki elemanı çıkarma =>pop ile
let lastItem = item.pop(); //son elemanı last item içine ekledik
console.log("lastItem:", lastItem, item);

// array bastaki elemanı cagırma => shift ile
let firstItem = item.shift(); //ilk  eleman first item içine
console.log("firstItem:", firstItem, item);

// array ilk elemanın degisitirlmesi
item[0] = 3;
console.log(item);

// array son eleman degistirlimesi
item[item.length-1] = 24
console.log(item);

////////////////////////////////////////////////////////////////////////////
// ARRAY İÇİNDE ARRAY YAPMA
let items = [1, 2, 3, 4 ,5 ]

//array içinde array
let femaleUsers = ["asena", "zeynep", "medine" ];
let maleUsers = ["fatih", "osan", "bekir"];

items.unshift( femaleUsers); //ilk userlar için
items.push( maleUsers); // son userlar için

console.log(items);

// es6 ve slice item kopyalama 
// let es6Items =[...items,]
// copyItems = items.slice();  şeklinde oluyor

//es6 array yapısını birlestirme
// let allUsers = [...femaleUsers, ...maleUsers] console.log(allUsers) 

// istediğimiz index bilgisine oge eklemek splice (index, 0, value)

 let allUsers =[...femaleUsers, ...maleUsers]

allUsers.splice(allUsers.length-1, 0, "Merhaba");
allUsers.splice(Math.floor(allUsers.length / 2), 0, "hey gringo")
console.log(allUsers);


