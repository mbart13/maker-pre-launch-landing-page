const form = document.querySelector(".js-form");
const input = document.querySelector(".js-email");
const parent = document.querySelector(".js-parent");

const checkEmail = (email) => {
  const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
  return re.test(email);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!checkEmail(input.value)) {
    parent.classList.add('is-error')
  }
};

const handleInput = () => {
  if (checkEmail(input.value)) {
    parent.classList.remove('is-error');
  }
}

form.addEventListener("submit", handleSubmit);
input.addEventListener("input", handleInput);
