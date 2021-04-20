const form = document.querySelector(".js-form");
const input = document.querySelector(".js-email");
const parent = document.querySelector(".js-parent");
const msg = document.querySelector(".js-error-msg")

const checkEmail = (email) => {
  const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
  return re.test(email);
};

const handleSubmit = (e) => {
  e.preventDefault();
  let errorMsg = ''

  if (!input.value) {
    errorMsg = 'Oops! Please add your email'
  }

  if (input.value && !checkEmail(input.value)) {
    errorMsg = 'Oops! That doesn\'t look like an email address'
  }

  if (!errorMsg) {
    return;
  }

  parent.classList.add('is-error');
  msg.innerText = errorMsg;

};

const handleInput = () => {
  if (checkEmail(input.value)) {
    parent.classList.remove('is-error');
  }
}

form.addEventListener("submit", handleSubmit);
input.addEventListener("input", handleInput);
