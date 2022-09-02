var header = document.createElement("header")
var nav = document.createElement("nav")

var resturantName = document.createElement("h1")
resturantName.innerHTML = "Doug's Burger Shop"

document.body.appendChild(header)
header.appendChild(resturantName)
header.appendChild(nav)

CreateNav()

function CreateNav() {
  let home = document.createElement("button")
  home.innerHTML = "Home"
  home.addEventListener("click", function(){createHome()})

  let menu = document.createElement("button")
  menu.innerHTML = "Menu"
  menu.addEventListener("click", function(){createMenu()})

  let contactUs = document.createElement("button")
  contactUs.innerHTML = "Contact Us"
  contactUs.addEventListener("click", function(){createContactUs()})

  var list = document.createElement("li")

  nav.appendChild(home)
  nav.appendChild(menu)
  nav.appendChild(contactUs)
}

function createHome() {
  removeContent()

  let content = document.createElement("div")
  content.classList.add("pgcontent")
  content.innerHTML = "Welcome to Home, Our Hours Are every day from 9am-7pm. This is a test addition"
  document.body.appendChild(content)
}

function createMenu() {
  removeContent()

  let content = document.createElement("div")
  content.classList.add("pgcontent")
  content.innerHTML = "  <ul><li>Clasic Burger</li><li>Burger 2</li><li>Super Burger</li><li>Burger Man</li><li>Super Deluxe Burger</li></ul>"
  document.body.appendChild(content)
}

function createContactUs() {
  removeContent()

  let content = document.createElement("div")
  content.classList.add("pgcontent")
  content.innerHTML = "Here is how you contact us!"
  document.body.appendChild(content)
}


function removeContent() {
  let content = document.querySelector(".pgcontent")
  if (content) {
    content.remove()
  }
}

createHome()