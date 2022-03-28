var animals;
var address = { region: { name: "seoul" } };
address.region.name = "busan";
var xy = {
    x: 1, y: 1, z: 2
};
// literal type
var name3;
name3 = "kim";
var obj = {
    name: "paper"
};
function RCP(hand) {
    var result = ["rock", obj.name];
    return result;
}
var aliasFunction = function (a) {
    return 3;
};
var memberInfo = {
    name: "kim",
    plusone: function (a) {
        return 2;
    }
};
memberInfo.plusone("d");
var cutZero = function (str) {
    if (str[0] === "0")
        return str.slice(1);
    return str;
};
var removeDash = function (str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== "-")
            newStr += str[i];
    }
    // let result = x.replace(/-/g, "");
    return parseInt(newStr);
};
function callbacktest(phone, cz, rd) {
    return rd(cz(phone));
}
