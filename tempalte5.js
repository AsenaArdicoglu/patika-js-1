let userName = prompt ("kullanıcı adinizi giriniz:");

if (user.length) {
    console.log (`kullanıcı bilginiz: ${userName}`);
}
else {
    console.log ("bilgi yok");
}

let userNamee = prompt ("kullanici adiniz:");
let age = prompt ("yasiniz:");

console.log (`kullanıcı bilginiz: ${userNamee}`);
console.log (`yasiniz: ${age}`);

if (userNamee && age > 18) {
    console.log ("ehliyet alabilirsin baby");
} else{
    console.log ("maalesef daha büyümelisin");
}