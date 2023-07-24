// let users = ["lorem", "ipsum", "dolor", ];
// const userListDOM = document.querySelector("#userList");

// for ( i = 0; i <users.length; i++ ) {
//     const liDOM = document.createElement("li");
//     liDOM.innerHTML = users[i]
//     userListDOM.appendChild(liDOM);
// }
// console.log(users);

// array de filter kullanımı
// 5 harften fazla olan products gösterimi
const PRODUCTS = ["mic", "cable", "speaker", "desktop", "server", "mouse", "keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS);

// Aktif kullancıılar oluşturma
// const USERS =[
//     { fullName: "John", isActive: false },
//     { fullName: "Caroline", isActive: true },
//     { fullName: "Michael", isActive: true },
//     { fullName: "Jonathon", isActive: true },
//     { fullName: "Lily", isActive: false },

// ]

// const ACTIVE_USERS = USERS.filter(user => user.isActive) // default olarak bzie true yu döndürür
// console.log(ACTIVE_USERS);

// const ACTIVE_USERS = USERS.filter(user => user.isActive ==false) 
// console.log(ACTIVE_USERS);

// array ve map ile verinin değiitiirilerek yeni list olusturma

/*
userName içinde orijinal isim kalsın 
shortNAme içinde ilk harf büyük (A.)
newName içinde ilk harf büyük
{userName: "JOHN", shortNAme: "J." newName:"John"}
*/

const USERS =  ["JOHN", "JONATHON", "JAMIE", "JACKSON", "JULLY"]
const NEW_USERS = USERS.map( user => user.toLowerCase()) 
// console.log(NEW_USERS);

// RETURN lü örneği
// const USERS_OBJ = USERS.map( item => 
//     {
//         return{
//             userName: item, shortName: `${item[0]}.`, newName: `${item[0]}.toUpperCase()}, ${item.slice(1).toUpperCase()}`
//         }
//     }
// )

// const USERS_OBJ = USERS.map( item => (
//         { userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
//     )
// )

// console.log(USERS_OBJ);

let user1   = {
    firstName : 'Asena',
    lastName : 'Ardic',
    score : [1, 2, 3, 4, 5],
    isActive : true,
    shortName : function( ) {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName
    }`
}
};

console.log(user1);