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
secondForm.addEventListener("submit", (e) => handleLogin(e));

async function handleLogin(e) {
  e.preventDefault();

  const email = secondForm.querySelector("input[type='text']").value;
  const password = secondForm.querySelector("input[type='password']").value;

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed! Please check your credentials.");
    }
    const data = await response.json();
    localStorage.setItem("token", data.token);
    alert("Login successful!");

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
