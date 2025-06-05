const body = document.querySelector("body");

if (!body) console.error("No body element found!");

const links = [
  { href: "./index.html", text: "Главная" },
  { href: "./blog.html", text: "Блог" },
  { href: "./cases.html", text: "Кейсы" },
  { href: "./design.html", text: "Макет" },
];

const header = document.createElement("header");
const img = document.createElement("img");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

header.classList.add("header");
img.classList.add("logo");
img.src = "./img/logo.svg";
img.alt = "Логотип сайта";
nav.classList.add("nav");
ul.classList.add("nav-list");

links.forEach((link) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.text;
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(img);
header.appendChild(nav);

body.insertBefore(header, body.firstChild);
