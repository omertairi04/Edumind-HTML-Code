const title = document.getElementById("titleInput");
const description = document.getElementById("descInput");

const createPost = async () => {
    const newPost = {
        title: title.value.trim(),
        body: description.value.trim()
    };

    if (newPost.title.length === 0) { // Fixed condition
        alert("Title shouldn't be empty");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/posts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        await response.json();

        // Redirect after successful post creation
        window.location.replace('http://127.0.0.1:5500/socialMedia/htmlFiles/viewPosts.html');
    } catch (err) {
        console.error('Error:', err);
    }
};
