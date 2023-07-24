
function helloWorld() {
    console.log('hello world');
}

function hello() {
    console.log('hello');
    helloWorld();
}

hello();

function helloo(firstName){
    console.log(`hello ${firstName}`)   
}

helloo("JavaScript")
const helloFuncV1 = (firstName)=> { console.log (`merhaba ${firstName}`)}
helloFuncV1("helloFuncV1")

const helloFuncV2 = firstName =>  console.log
(`merhaba ${firstName}`)                    //parametre tek ise süslü parantez kullanmak zorunda değilim

helloFuncV1("helloFuncV2") 

const helloFuncV3 = (firstName, lastName) => console.log(
    `merhaba ${firstName} ${lastName}`
)                                                                //parametre çift eklediğimde yazılısıı

helloFuncV3("helloFuncV3" , "last Name information")

const helloFuncV4 = (firstName, lastName) => {
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}



