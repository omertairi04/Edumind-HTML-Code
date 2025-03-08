const getPostIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    console.log("params:", params);
    
    return params.get("id"); // Get 'id' from query parameters
};

const details = document.getElementById("post-details");
const pTitle = document.getElementById("postTitle").value;
const body = document.getElementById("postBody")


const fetchPost = async() => {
    const postId = getPostIdFromURL();

    if (postId === null) {
        alert("ERROR WITH POST ID ")
        return;
    }

    const response = await fetch(`http://localhost:3000/posts/${postId}`)
    
    if (response.ok === true) {
        const jsonRes = await response.json();
        console.log("json res", jsonRes);

        document.getElementById("postTitle").value = jsonRes.title;
        body.textContent = jsonRes.body;

        details.style.display = 'block'
        
    } else {
        alert("ERROR W/ RESPONSE")
        return;
    }

}


const updatePost = async () => {
    const postId = getPostIdFromURL();
    const updatedT = document.getElementById("postTitle").value;
    const updatedB = document.getElementById("postBody").value;

    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: updatedT,
            body: updatedB
        })
    });

    if (response.ok === true) {
        alert("Post updated okay")
    } else {
        alert("POST NOT UPDATED")
    }
}


window.onload = fetchPost;








/*

FUNCTION updatePost:
    SET postId to the result of getPostIdFromURL
    SET updatedTitle to the value of the title input field
    SET updatedBody to the value of the body input field

    TRY:
        SEND a PUT request to "http://localhost:3000/posts/{postId}" with the updated data as JSON

        IF response is successful:
            SHOW an alert saying "Post updated successfully!"
        ELSE:
            SHOW an alert saying "Failed to update post"
    CATCH error:
        PRINT "Error updating post" and the error message

ON window load:
    CALL fetchPost









FUNCTION fetchPost:
    SET postId to the result of getPostIdFromURL

    IF postId is not provided:
        SHOW an alert saying "No post ID provided in the URL"
        RETURN

    TRY:
        SEND a GET request to "http://localhost:3000/posts/{postId}"
        
        IF response is successful:
            PARSE the response as JSON and store it in 'post'
            FILL the form fields with 'postId', 'post.title', and 'post.body'
            SHOW the post details section

        ELSE:
            SHOW an alert saying "Post not found"
    CATCH error:
        PRINT "Error fetching post" and the error message


    */
