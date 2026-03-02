
var a=10;
function x()
{
    var b=20;
    console.log("window");
    console.log(b);
}
console.log(a);

console.log(this.a) //here this will give undefined but properly works on browser
console.log(window.a);