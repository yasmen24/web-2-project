document.addEventListener("DOMContentLoaded", function () {
    const designerRadio = document.getElementById("designerRadio");
    const clientRadio = document.getElementById("clientRadio");
    const designerForm = document.getElementById("designerForm");
    const clientForm = document.getElementById("clientForm");

    // Hide both forms initially
    designerForm.style.display = "none";
    clientForm.style.display = "none";

    designerRadio.addEventListener("change", function () {
        designerForm.style.display = "block";
        clientForm.style.display = "none";
    });

    clientRadio.addEventListener("change", function () {
        clientForm.style.display = "block";
        designerForm.style.display = "none";
    });

    const designerSignUpForm = document.getElementById("designerSignUpForm");
    const clientSignUpForm = document.getElementById("clientSignUpForm");

    designerSignUpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        redirectToHomepage("designer");
    });

    clientSignUpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        redirectToHomepage("client");
    });

    function redirectToHomepage(userType) {
        const homepageUrl = userType === "designer" ? "designer_home.html" : "client_home.html";
        window.location.href = homepageUrl;
    }
});

