function myfunction(x) {
    if (typeof x === "string") {
        return "none";
    }
    else {
        return x + 1;
    }
}
myfunction(2);
myfunction("string");
function hello(name) {
    if (name === undefined) {
        console.log("hi");
    }
    else {
        console.log("noname");
    }
}
function myfunction2(x) {
    var array = [];
    array[0] = x;
    return array;
}
console.log(myfunction2("s"));
