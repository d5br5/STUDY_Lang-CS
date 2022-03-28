var title = document.querySelector("#title");
if (title instanceof Element) {
    title.innerHTML = "hi";
}
if (title === null || title === void 0 ? void 0 : title.innerHTML) {
    title.innerHTML = "hello";
}
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
var button = document.querySelector("#button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var img = document.querySelector("#img");
    if (img instanceof HTMLImageElement) {
        img.src = "new.jpg";
    }
});
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var links = document.querySelectorAll(".link");
    links.forEach(function (a) {
        if (a instanceof HTMLAnchorElement) {
            a.href = "https://kakao.com";
        }
    });
});
