var rectangle = require("./rectangle");
function solveRectangle(l,b){
    if(l==0 || b==0) {
        console.log("The dimensions should be greater than 0");
    }else{
        console.log("Area:"+rectangle.area(l,b));
        console.log("Perimeter:"+rectangle.perimeter(l,b));
    }
}
solveRectangle(0,0);
solveRectangle(1,2);