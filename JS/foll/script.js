const mainDiv = document.getElementById("mainDiv");

const example = async () => {

    const response = await fetch("https://fakestoreapi.com/products");

    if (response.ok === true) {

        const jsonResponse = await response.json();
        console.log("ress", jsonResponse);
        
        if (jsonResponse.length === 0) {
            return;
        }

        jsonResponse.forEach(post => {
            const div = document.createElement("div")
            const h2 = document.createElement("h2")
            const p = document.createElement("p")
            const img = document.createElement("img")

            h2.textContent = `${post.title}`;
            p.textContent = `${post.price}`;

            img.src = `${post.image}`

            div.appendChild(img)
            div.appendChild(h2);
            div.appendChild(p);
            mainDiv.appendChild(div)
        })

    } else {
        alert("Error")
        return;
    } 
}

example()


