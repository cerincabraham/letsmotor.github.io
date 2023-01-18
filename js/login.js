const loginEmailField = document.getElementById("loginname");
const validateEmailMsg = document.querySelector(".warning-text");
const passwordField = document.getElementById("loginpassword");
validateEmailMsg.textContent = "";

let emailValidateHandler = false;
let passwordValidateHandler = false;
let loginValidateHandler = false;



function isEmail(value) {
    var pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(value);
}

loginEmailField.addEventListener("blur", function (e) {

    if (isEmail(loginEmailField.value)) {
        emailValidateHandler = true;

    } else {
        validateEmailMsg.textContent = "Please enter the email";
    }
});


loginEmailField.addEventListener("focus", function (e) {
    validateEmailMsg.textContent = "";
    emailValidateHandler = false;
});

passwordField.addEventListener("blur", function (e) {

    if (passwordField.value != "") {
        passwordValidateHandler = true;

    } else {
        validateEmailMsg.textContent = "Please enter the password";
    }
});


//username & password (login) validation
document.querySelector(".login-btn-clicked").onclick = function () {
    console.log("login clicked");
    if (emailValidateHandler && passwordValidateHandler) {
        if (loginEmailField.value == "user@gmail.com" && passwordField.value == "user123") {
            loginPanelElement.classList.remove("panel-slide-in");
            loginPanelElement.classList.add("panel-slide-out");
            setTimeout(oneTimeTipLoader, 2000);
            panelLoading();
            // loadCalculate();
        } else {
            warningMsg(
                "Login failed",
                "Please enter correct email & password"
            );
        }

    } else {
        warningMsg(
            "Please enter the email & password fields",
            ""
        );
    }

};

