
let figure = {
    title: "rectangle",
    length: 10,
    width: 6,
  };

let area,perimetr;
let {title,length,width} = figure;
perimetr = width+width+length+length;
area = width  * length;
console.log(`${perimetr}\n${area}`);













let figure = {
    title: "rectangle",
    length: 10,
    width: 6,
    area : function() {
        // Write code here
    },
    perimeter: function(){
        // Write code here
    }
  };

  console.log(figure.area());
  console.log(figure.perimeter());   
