const postList = document.getElementById("posts");

const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/posts');
    console.log("RESPONSE : " , response);
    
    /*
        {
            "response": {
                "ok" : true
            }

        }
    */


    if (response.ok === true) {
        const jsonResponse = await response.json();
        console.log("JSON RESP:" , jsonResponse)
        postList.innerHTML = "";

        if (jsonResponse.length === 0) {
            postList.innerHTML = "<li>No posts available</li>";
            return;
        }

        jsonResponse.forEach(post => {
            const li = document.createElement("li");

            const link = document.createElement("a");
            link.textContent = `${post.title}: ${post.body}`;
            link.href = `updatePost.html?id=${post.id}`;

            li.appendChild(link);
            postList.appendChild(li);
        });
    } else {
        console.error("Failed to fetch posts");
    }
};


window.onload = fetchPosts;




























// mirne mainDiv me id 
// const example = async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
    
//     /*
//         {
//             "response": {
//                 "ok" : true
//             }

//         }
//     */


//     if (response.ok === true) {
//         const jsonResponse = await response.json();
//         console.log("EXAMPLE RESP:" , jsonResponse)

//         jsonResponse.forEach(post => {
//             const div = document.createElement("div");
//             const h1 = document.createElement("h1");
//             const p = document.createElement("p");
        
//             h1.textContent = `${post.title}`;
//             p.textContent = `${post.body}`;
        
//             div.appendChild(h1);
//             div.appendChild(p);
        
//             postList.appendChild(div);
//         });
        
//     }
// }

// example()