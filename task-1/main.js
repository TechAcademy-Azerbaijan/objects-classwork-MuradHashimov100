let products = [
    {title:'Apple', weight: 12}, 
    {title:'Chocolate', weight: 43}, 
    {title:'Avocados', weight: 33}, 
    {title:'Milk', weight: 32}, 
    {title:'Bread', weight: 18}, 
    {title:'Cherry', weight: 65}, 
    {title:'Rice', weight: 76}, 
    {title:'Orange', weight: 22}, 
    {title:'Kiwi', weight: 7}
]

let foods = ['Apple', 'Avocados', 'Cherry', 'Orange', 'Kiwi'];
// let forum  = for(let i = 0;i<foods.length;i++){

// }
let sum = 0;
for(let obj of products){
   if(foods.includes(obj.title)){
    sum = sum + obj.weight;
   }
}
console.log(sum);
