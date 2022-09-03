var header = document.createElement("header")
var nav = document.createElement("nav")

var resturantName = document.createElement("h1")
resturantName.innerText = "Doug's Burger Shop"


const burger1 = {
  name: 'Double Deep Fried Buger',
  tag: 'Artery Stoping Good',
  desc: "A burger double fried and placed upon a stick.",
  price:"$10.99"
  
};

const burger2 = {
  name: 'The Ooey Gooey',
  tag: 'The classic',
  desc: "This is the classic burger, it has all the fixins'",
  price: "$10.99"
};

const burger3 = {
  name: 'The California Supreme',
  tag: "So good it'll cause traffic",
  desc:"SOLD OUT",
  price: "$12.99"
};

const burger4 = {
  name: 'The Texas Supreme',
  tag: 'Yee Haw',
  desc:"This is the Yee Haw Burger",
  price: "$5.99"
};

const burger5 = {
  name: 'The Minnesota Supreme',
  tag: 'Oop, Let me squeez right past you.',
  desc:"The I'm sorry burger",
  price: "$11.99"
};

const burger6 = {
  name: 'The Supreme Buger',
  tag: 'The burger to end all burgers.',
  desc:"This is the burger that will ruin all other hamburgers for you and the world.",
  price: "$100.99"
};

const burger7 = {
  name: 'The Artisian Buger',
  tag: 'For Hipsters only',
  desc:"This burger is locally sourced bread with a patty in the middle with some not so locally sourced avacado.",
  price: "$1000.99"
};

const burger8 = {
  name: 'The Sock Knocker',
  tag: "So good it'll knock your socks off",
  desc:"The head fry cook's dirty sock is in the burger patty",
  price: "$17.99"
};

var burgermenu = [burger1, burger2, burger3, burger4, burger5, burger6, burger7, burger8]

document.body.appendChild(header)
header.appendChild(resturantName)
header.appendChild(nav)

CreateNav()

function CreateNav() {
  let home = document.createElement("button")
  home.innerText = "Home"
  home.addEventListener("click", function(){createHome()})

  let menu = document.createElement("button")
  menu.innerText = "Menu"
  menu.addEventListener("click", function(){createMenu()})

  let contactUs = document.createElement("button")
  contactUs.innerText = "Contact Us"
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

  let contentbox = document.createElement("div")
  contentbox.classList.add("contentbox")
  let header = document.createElement("h1")
  header.innerText = "Doug's Famous Burgers"
  let para = document.createElement("p")
  para.innerText = "Come to the best burger shop in all of alaska. Home of the worldn's most famous burgers. Our Hours are 9am-11pm everyday. When you want bugers, you know where to go."

  contentbox.appendChild(header)
  contentbox.appendChild(para)

content.appendChild(contentbox)

  document.body.appendChild(content)
}

function createMenu() {
  removeContent()

  let content = document.createElement("div")
  content.classList.add("pgcontent")
  
  burgermenu.forEach(element => {
    let name = document.createElement("h2")
    let tagLn = document.createElement("h3")
    let desc = document.createElement("p")
    let price = document.createElement("span")

    let container = document.createElement("div")
    container.classList.add("burger")
    price.classList.add("price")

    name.innerText = element.name
    tagLn.innerText = element.tag
    desc.innerText = element.desc
    price.innerText = element.price

    container.appendChild(name)
    container.appendChild(tagLn)
    container.appendChild(desc)
    container.appendChild(price)

    content.appendChild(container)

  });
  document.body.appendChild(content)
}

function createContactUs() {
  removeContent()

  let content = document.createElement("div")
  content.classList.add("pgcontent")
  content.innerText = "Here is how you contact us!"
  let form = document.createElement("div")
  form.classList.add("form")

  let nameLabel = document.createElement("label")
  nameLabel.innerText = "Name"
  let nameInput = document.createElement("input")
  nameInput.type = "Text"
  let msgLabel = document.createElement("label")
  msgLabel.innerText = "Message for Us"
  let msgInput = document.createElement("textarea")

  form.appendChild(nameLabel)
  form.appendChild(nameInput)
  form.appendChild(msgLabel)
  form.appendChild(msgInput)
  
let sendBtn = document.createElement("button")
sendBtn.innerText = "Send"
sendBtn.style.alignSelf = "center"
sendBtn.style.marginTop = "10px"
  form.appendChild(sendBtn)
  
  content.appendChild(form)
  document.body.appendChild(content)
}


function removeContent() {
  let content = document.querySelector(".pgcontent")
  if (content) {
    content.remove()
  }
}

createHome()