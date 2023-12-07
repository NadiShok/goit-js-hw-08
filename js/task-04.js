const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        return alert("All form fields must be filled in");
    }

    const userEmail = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(userEmail);
    
    form.reset();
})
