function main() {
  const growMe = document.querySelector("#grow-me");
  console.log(growMe);
  growMe.classList.add("big");

  const shrinkMe = document.querySelector("#shrink-me");
  shrinkMe.classList.remove("big");

  const lists = document.querySelectorAll("li");
  console.log(lists);

  const pLink = document.querySelector(".link");
  pLink.innerText = "someWhere";
  pLink.classList.add("selected");
  pLink.setAttribute("href", "https://www.example.com");
  console.log(pLink.getAttribute("href"));

  const hideMe = document.getElementById("hide-me");
  hideMe.style.display = "none";
  console.log("hideMe");

  const showMe = document.getElementById("show-me");
  showMe.style.display = "block";
  console.log("showMe");

  const pName = document.getElementById("name");
  console.log(pName.value);

  const h1 = document.querySelector("h1");
  h1.innerText = `Welcome ${pName.value}`;
  console.log(h1);
}
