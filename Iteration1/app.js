//1.1
console.log(document.querySelector(".showme"));

//1.2
console.log(document.querySelector("#pillado"));

//1.3
let p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
    console.log(p[i].innerHTML);
}

//1.4
let pokemon = document.querySelectorAll(".pokemon");
for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].innerHTML);
}

//1.5
/*let test = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < test.length; i++) {
    console.log(test[i].innerHTML);
}*/

//1.6
let test = document.querySelectorAll('[data-function="testMe"]');
for (let i = 0; i < test.length; i++) {
    if (test[i] === test[2]){
        console.log(test[i].innerHTML);
    }
}
