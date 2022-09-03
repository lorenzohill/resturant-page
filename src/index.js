var header = document.createElement("header")
var nav = document.createElement("nav")

var resturantName = document.createElement("h1")
resturantName.innerHTML = "Doug's Burger Shop"


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
  content.innerHTML = '<div class="contentbox"><h1>Dougs Famous Burgers</h1><p>Come to the best burger shop in all of alaska. Home of the worlds most famous burgers. Our Hours are 9am-11pm everyday. When you want bugers. You know where to go.</p></div>'
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

    name.innerHTML = element.name
    tagLn.innerHTML = element.tag
    desc.innerHTML = element.desc
    price.innerHTML = element.price

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
  content.innerHTML = "Here is how you contact us!"
  let form = document.createElement("div")
  form.classList.add("form")

  form.innerHTML = '<label>Name</label><input type="text"><label for="txt">Message for Us</label><textarea rows="5" cols="60" name="text" placeholder="Enter text"></textarea>'
  
let sendBtn = document.createElement("button")
sendBtn.innerHTML = "Send"
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