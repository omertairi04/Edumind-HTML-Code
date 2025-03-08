document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Fixed login credentials (ignoring user input)
    const loginData = {
        username: "mor_2314",
        password: "83r5^_"
    };

    try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        if (data.token) {
            console.log("Login successful:", data);
            
            // Store user data in localStorage
            localStorage.setItem("user", JSON.stringify(data));

            // Display success message
            const responseMessage = document.getElementById("responseMessage");
            responseMessage.style.color = "green";
            responseMessage.textContent = "Login successful! Redirecting...";

            // Redirect to another page after 2 seconds
            setTimeout(() => {
                window.location.replace('http://127.0.0.1:5500/fakeStoreApi/products.html');
            }, 2000);
        } else {
            document.getElementById("responseMessage").textContent = "Invalid credentials. Try again.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("responseMessage").textContent = "Login failed. Please try again.";
    }
});
