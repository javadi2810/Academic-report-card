// .edit-modal .rotation-----------------------------
let modalRotation = document.querySelector(".edit-modal .rotation")




let modal = document.querySelector(".edit-modal");
let InformationForm = document.querySelector("#Information-form")
let formRotate = document.querySelector(".edit-form-container");
let formLogin = document.querySelector(".form-login");
let formContainer = document.querySelector('.login-container');
let formStudent = document.querySelector(".form-student");
let formSchool = document.querySelector(".form-school");


// buttons----------------------
let login_student_submit = document.querySelector(".login-student-submit");
let login_student_close = document.querySelector(".login-student-close");


let login_school_submit = document.querySelector(".login-school-submit");
let login_school_close = document.querySelector(".login-school-close");

// -----
let formModal







let InformationButton = document.querySelectorAll("#Information-form button");
InformationButton.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (this.classList.contains("login-student-submit")) {
            formRotate.classList.add("rotat")
            formContainer.classList.add("rotat")


            modalRotation.style.opacity = "0";
            setTimeout(() => {
                modalRotation.style.opacity = "1";
            }, 1000)


            setTimeout(() => {
                formStudent.classList.remove("active");
                formSchool.classList.add("active")
            }, 300)

        }


        if (this.classList.contains("login-school-close")) {
            formRotate.classList.remove("rotat")
            formContainer.classList.remove("rotat")


            modalRotation.style.opacity = "0";
            setTimeout(() => {
                modalRotation.style.opacity = "1";
            }, 1000)


            setTimeout(() => {
                formStudent.classList.add("active");
                formSchool.classList.remove("active")
            }, 300)
        }

        if (this.classList.contains("login-school-submit")) {
            // Converting a login form to a medal form ------------------------------
            formLogin.classList.add("form-modal")
            formLogin.classList.remove("form-login")
            formModal = document.querySelector('.form-modal')



            formContainer.classList.add("modal-container")
            formContainer.classList.remove("login-container")




            // buttons-----------------------------------------------
            login_student_submit.classList.add("modal-student-submit")
            login_student_submit.classList.remove("login-student-submit")


            login_student_close.classList.add("modal-student-close")
            login_student_close.classList.remove("login-student-close")

            login_school_submit.classList.add("modal-school-submit")
            login_school_submit.classList.remove("login-school-submit")

            login_school_close.classList.add("modal-school-close")
            login_school_close.classList.remove("login-school-close")



            modal.classList.remove("active")
        }

    })
})