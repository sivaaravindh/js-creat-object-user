/*lvar obj = { 'bar' : 'baz' }
var key = Object.keys(obj)[0];
var value = obj[key];
     
 console.log("key = ", key)
 console.log("value = ", value)

let fruit={name:"apple",skill:"orange"};

let a =prompt("enter the index");
let c=prompt("enter the name");
fruit[a]=c

console.log(fruit)

let head={};

let n=parseInt(prompt("enter the index"));

for(i=0;i<=n;i++){
    let a =prompt("enter the index");
    let c=prompt("enter the name");
    head[a]=c ;
    
}
console.log(head);*/

let head={name:"siva",degree:"B.sc physics",Dob:"02-06-2003",district:"tankasi" };
console.log(head);

let b=head[0]
b=prompt("enter the name");
let c=prompt("enter the name");

head[b]=c;
console.log(head);