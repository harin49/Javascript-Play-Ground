document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div id="main">
</div>
`;
let div = document.createElement("div");
div.innerHTML="hello";
div.style.backgroundImage = "url('./recurvadivelu.jpeg')";
div.style.height="500px";
function divcall() {
  document.getElementById("main").appendChild(div);
  divcall();
  }
divcall();