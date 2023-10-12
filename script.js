//Coding
const coding = document.getElementById("coding");

coding.addEventListener("click", yourCode);

function yourCode() {
  prompt("What's your coding language?")
}

//Skating
const outdoor = document.getElementById("outdoor");

outdoor.addEventListener("mouseover", walk);
function walk() {
  alert("I love the outdoors!");
}

const indoor = document.getElementById("indoor");

indoor.addEventListener("mouseover", () => {
  alert("Being a couch potatoe is the best!")
});

//Book
const book = document.getElementById("book");
const favoriteBook = document.getElementById("favoriteBook");

book.addEventListener("mouseout", () => {
  let myResponse = prompt("A memorable book it...");
  favoriteBook.innerHTML= myResponse;
});
