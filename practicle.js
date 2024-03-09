class Shap {
    constructor(name) {
       this.shapName = name;
    }
   
    area() {
       console.log('I have a ' + this.shapName);
    }
 }
 
 class Circle extends Shap {
      constructor(name, r) {
           super(name);
           this.radius = r;
      }
      show() {
        super.area()
           console.log("Area of "+ this.shapName+', is a '+ (this.radius*this.radius*3.14))
      }
 }
 
 const myShap = new Circle("Circle-1", 10);
 myShap.show();
 