let dropdown = document.querySelector(".newDiv");
let optionClick = document.getElementById("character");
let option = document.getElementById("opt");

let mastersDiv = document.querySelector(".masters-div");
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
