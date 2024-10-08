function pass() {
    let password = document.querySelector("#password").value;
  if(password==="")
  {
      document.querySelector("#errorpassword").innerHTML =
      "please enter password";
    let selectname = document.querySelector("#password");
    selectname.style.borderColor = "red";
    selectname.style.outlineColor = "red";
    return false;
  }
    if (
      !(
        password.match(/[1234567890]/) &&
        password.match(/[!@#$%^&*()]/) &&
        password.match(/[qwertyuiopasdfghjklzxcvbnm]/) &&
        password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
      )
    ) {
      document.querySelector("#errorpassword").innerHTML =
        "please use special character and number";
      let selectname = document.querySelector("#password");
      selectname.style.borderColor = "red";
      selectname.style.outlineColor = "red";
      return false;
    }
  }