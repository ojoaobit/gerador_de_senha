let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#resultado");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function hasNumber(str) {
  return /\d/.test(str);
}

function hasSpecialChar(str) {
  return /[!@#$*]/.test(str);
}

function generatePassword() {
  let pass = "";
  let passHasNumber = false;
  let passHasSpecialChar = false;

  while (!passHasNumber || !passHasSpecialChar) {
    pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    // Verifica se tem 1 numero e 1 caractere especial
    passHasNumber = hasNumber(pass);
    passHasSpecialChar = hasSpecialChar(pass);
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copiarSenha() {
  navigator.clipboard.writeText(novaSenha).then(() => {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.style.display = "block";

    setTimeout(() => {
      mensagemDiv.style.display = "none";
    }, 3000);
  });
}

var agora = new Date();
var ano = agora.getFullYear();
var footer = document.getElementById("footer");
footer.classList.add("col-3", "sm-regular3");
footer.innerHTML += `<p>&copy ${ano} Joaobit_</p>`;
