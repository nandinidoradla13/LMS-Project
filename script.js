
// Browse Courses Button

document.getElementById("browseCourse").addEventListener("click", function() {
    window.location.href = "course.html";
});

//roadmap section
  const timelineItems = document.querySelectorAll(".timeline-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach((item) => {
    observer.observe(item);
});

// LOGIN & REGISTER

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function showRegister() {
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function registerUser() {

    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if(name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = {
        name:name,
        email:email,
        password:password
    };

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("message").innerHTML =
        "Registration Successful! Please Login.";

    showLogin();
}

function loginUser() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser =
        JSON.parse(localStorage.getItem("user"));

    if(
        storedUser &&
        email === storedUser.email &&
        password === storedUser.password
    ){
        alert("Login Successful");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Invalid Email or Password");
    }
}

// COURSE ENROLLMENt
function showForm(course) {
    document.getElementById("enrollForm").style.display = "flex";
    document.getElementById("courseName").value = course;
}

function closeForm() {
    document.getElementById("enrollForm").style.display = "none";
}

// submit
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Course Enrolled Successfully!");
    closeForm();
});


//menu//
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

document.addEventListener("click", function(event){

    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.querySelector(".menu-btn");

    if(
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ){
        sidebar.classList.remove("active");
    }
});

// CONTACT FORM

    const contactForm =
        document.querySelector(".container form");

    if(contactForm){

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();

            alert(
                "Thank you! Your message has been sent."
            );

            contactForm.reset();
        });
    }
