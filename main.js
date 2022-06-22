const mytext = document.getElementById("text");
const text = document.querySelector("#div");

document.querySelector("button").onclick = () => {
	text.append(mytext.value);
	let speech = new SpeechSynthesisUtterance(text.innerText);
  speechSynthesis.speak(speech);
  text.innerText = "";
};
