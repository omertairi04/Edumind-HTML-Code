document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission reload

    // Collect form data
    const userData = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        name: {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value
        },
        address: {
            city: document.getElementById("city").value,
            street: document.getElementById("street").value,
            number: parseInt(document.getElementById("number").value), // Convert to number
            zipcode: document.getElementById("zipcode").value,
            geolocation: {
                lat: document.getElementById("lat").value,
                long: document.getElementById("long").value
            }
        },
        phone: document.getElementById("phone").value
    };

    // Send data to Fake Store API
    fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Registered User:", data);
        
        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(data));

        // Display success message
        document.getElementById("responseMessage").style.color = "green";
        document.getElementById("responseMessage").textContent = "Registration successful! Redirecting to login...";
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("responseMessage").textContent = "Registration failed. Please try again.";
    });
});
