let figure = {
    title: "rectangle",
    length: 10,
    width: 6,
    perimeter : function() {
      let {width,length} = figure;
      this.perimeter = width * length;
      return this.perimeter
    },
    area: function(){
       let {length,width} = figure;
       this.area = width * 2 + length * 2;
       
       return this.area
    }
  };

  console.log(figure.area());
  console.log(figure.perimeter());  



//Oz variantim sizin variant daha rahat idi prisda push eledim

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


