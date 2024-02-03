document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const userType = document.getElementById("userType").value;

        // Simulate a successful login (validation is not required in this phase)
        const successfulLogin = true;

        if (successfulLogin) {
            redirectToHomepage(userType);
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });

    function redirectToHomepage(userType) {
        const homepageUrl = userType === "designer" ? "DesignerHomepage.html" : "Clinet.html";
        window.location.href = homepageUrl;
    }
});
