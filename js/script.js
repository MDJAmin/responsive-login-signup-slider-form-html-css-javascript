const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");
const fistForm = document.querySelector("#form1");
const secondForm = document.querySelector("#form2");
const container = document.querySelector(".container");


signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());