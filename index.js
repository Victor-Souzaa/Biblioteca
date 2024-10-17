function validateFields(){
  const emailValid = isEmailValid();
  document.getElementById('recover-password-button').disabled = !emailValid;

  const passwordValid = isPasswordValid();
  document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  } 

  return validateEmail(email);
}

function isPasswordValid(){
  const password = document.getElementById('password').value;
  if (!password){
    return false;
  }

  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}






function mostrarSenha(){
  var inputPass = document.getElementById('password')
  var btnShowPass = document.getElementById('btn-senha')
  if (inputPass.type === 'password'){
      inputPass.setAttribute('type', 'text',)
      btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
      inputPass.setAttribute('type', 'password',)
      btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
  }

}


async function getData (){
  const result = await fetch("http://localhost:8088")
      .then(result => JSON.stringify(result))
      .then(data => console.log(data))

      return result
}

getData()