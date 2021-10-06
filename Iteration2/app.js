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