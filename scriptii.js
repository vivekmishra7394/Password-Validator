const passwordInput = document.querySelector(".pass-field input")
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    { regex: /.{8,}/, index: 0 },   //Minimum of 8 characters
    { regex: /[0-9]/, index: 1 },    //At least one number
    { regex: /[a-z]/, index: 2 },    //Atleast one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 },    //Atleast one special character
    { regex: /[A-Z]/, index: 4 },    //Atleast one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        //Check if password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        //Updating class and item of requirements item if requirement matched or not
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");

        }
        else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";  //isse ye hoga ki jab hum eye button pe click krenge to vo ya to password hoga  ya to text hoga to vo yahi display krega.  OR Toggle the password input type between "password" and "text"

    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`        //Update the eye icon class based on the password input type

});

