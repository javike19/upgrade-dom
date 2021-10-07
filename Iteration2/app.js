//2.1
console.log(document.createElement("div"));

//2.2
/*let father = document.createElement("div");
let child = father.appendChild(document.createElement("p"));
console.log(father);*/

//2.3
/*let father = document.createElement("div");
for (let i = 0; i < 6; i++) {
    let child = father.appendChild(document.createElement("p"));
}
console.log(father);*/

//2.4
let p = document.createElement("p");
p.innerHTML = "Soy dinámico!";
console.log(p.innerHTML);

//2.5
let text = document.querySelector(".fn-insert-here");
text.innerHTML = "Wubba Lubba dub dub";
console.log(text.innerHTML);

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let lista = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
    let childs = lista.appendChild(document.createElement("li"));
}
console.log(lista);

//2.7
let d = document.querySelector("body");
let borrar = document.querySelectorAll("fn-remove-me");
let resultado = d.removeChild(borrar);

