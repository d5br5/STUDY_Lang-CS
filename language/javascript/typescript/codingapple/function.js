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
console.log(myfunction2("s")); // 이러면 안됨
function cleanArray(arr) {
    return arr.map(function (a) {
        if (typeof a === "string") {
            return parseInt(a);
        }
        else {
            return a;
        }
    });
}
;
var chulsoo2 = { subject: "math" };
var younghee = { subject: ["science", "english"] };
var minsoo = { subject: ["science", "art", "korean"] };
function subFilter(obj) {
    if (typeof obj.subject === "string") {
        return obj.subject;
    }
    else {
        return obj.subject[obj.subject.length - 1];
    }
}
