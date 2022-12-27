var rectangle = require("./rectangle");
function solveRectangle(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rectangle(l,b,
        (err,rectangleProp) => {
            if(err){
                console.log("Error :" + err.message);
            }else{
                console.log("The area of the rectangle of dimensions l = " 
                    + l + " and b = " + b + " is " + rectangleProp.area());
                console.log("The perimeter of the rectangle of dimensions l = "
                    + l + " and b = " + b + " is " + rectangleProp.perimeter());
            }
        }
    );
    console.log("This statement after the call to rectangle()");
}
solveRectangle(0,0);
solveRectangle(1,2);