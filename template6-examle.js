// Bolum sonu egzersizi

// yapılacaklar
//  1- prompt ile aldığın bilgiye göre not bigisi #info ya yazdırılacak
// AA  90-100
// BA  85-90
// BB  80-84 
// CB  75-79 
// CC  70-74
// DC  65-69
// DD  60-64
// FD  50-59
// FF  0-59


// 2- kullanıcın girdiği verinin istediğimiz aralikta olup olmadığına bak
// 3- ff bilgisinde uzgun surat iconu fd de düz surat sobrasında ise gülümseyen
// 4- ff class bilgisi tex-danger diğerleri ise tex-primary olsun

let examGrade = prompt("puani giriniz:")
let textInfo;

 if (examGrade >= 0 && examGrade <=100){
    if (examGrade >= 90 ){
        textInfo = "AA"
    } else if (examGrade >= 85){
   textInfo = "BA"
    } else if (examGrade >=80){
        textInfo ="BB"
    } else if (examGrade >= 75){
        textInfo = "CB"
    } else if (examGrade >= 70){
        textInfo = "CC"
    } else if (examGrade >=65) {
        textInfo = "DC"
    } else if (examGrade >= 60){
        textInfo ="DD"
    } else if (examGrade >= 50){
        textInfo = "FD"
    } else if (examGrade >= 0) {
        textInfo = "FF"
    }
 } else {
    textInfo ="puani tekrar giriniz"
 }
let information =document.querySelector("#information")
information.innerHTML = `${information}`