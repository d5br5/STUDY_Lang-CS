let title = document.querySelector("#title");
if (title instanceof Element) {
  title.innerHTML = "hi";
}
if (title?.innerHTML) {
  title.innerHTML = "hello";
}

let link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com"  
}

let button = document.querySelector("#button");
button?.addEventListener("click", function(){
  let img = document.querySelector("#img");
  if (img instanceof HTMLImageElement) {
    img.src="new.jpg"
  }
})

button?.addEventListener("click", function () {
  let links = document.querySelectorAll(".link");
  links.forEach(a => {
    if (a instanceof HTMLAnchorElement) {
      a.href="https://kakao.com"
    }
  })
})