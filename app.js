let dropdown = document.querySelector(".newDiv");
let optionClick = document.getElementById("character");
let option = document.getElementById("opt");
let submit1 = document.getElementById("submit1");
let mastersDiv = document.querySelector(".masters-div");
let nameValue = document.getElementById("name").value.toString().length;
console.log(nameValue);
console.log(submit1);
let emailInput = document.getElementById("email");
let numberInput = document.getElementById("number");
let dateInput = document.getElementById("date");
$("#done").click(() => {
  window.location.href = "./thanks.html";
});
console.log(nameValue.length);
submit1.addEventListener("click", (e) => {
  e.preventDefault;
  if (
    $("#name").val().length &&
    emailInput.value.substr(-12) == "@redberry.ge"
  ) {
    window.location.href = "./register2.html";
  }
});
$("#character").click(() => {
  $(".masters-div").toggleClass("active");
});
$("#done").click(() => {
  window.location.href = "./thanks.html";
});
// get img data
let data = async () => {
  try {
    let data = await fetch(
      "https://chess-tournament-api.devtest.ge/api/grandmasters"
    ).then((res) => res.json());
    console.log(data);
    let images = data.forEach((el) => {
      let spans = el.name;
      let imgs = el.image;
      let span = document.createElement("span");
      let img = document.createElement("img");
      img.src = `https://chess-tournament-api.devtest.ge/${imgs}`;
      img.classList.add("masters");
      span.innerHTML = spans;
      let newDiv = document.createElement("div");
      newDiv.classList.add("masters-div");
      newDiv.appendChild(span);
      newDiv.appendChild(img);
      dropdown.append(newDiv);
      $(span).click(() => {
        option.innerHTML = spans;
        option.value = spans;
      });
    });
  } catch (error) {
    console.log(error);
  }
};
data();
