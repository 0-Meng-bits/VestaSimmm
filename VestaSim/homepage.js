document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        alert("You need to log in first.");
        window.location.href = "index.html";
    } else {
        document.getElementById("userName").textContent = user.firstName;
    }

    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    });
});
