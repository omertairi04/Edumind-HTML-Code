const title = document.getElementById("title")
const price = document.getElementById("price")
const desc = document.getElementById("desc")
const img = document.getElementById("img")
const cat = document.getElementById("cat")

const example = async () => {

    const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            price: price,
            description: desc,
            image: img,
            category: cat
        })
    });

    const created = await response.json()

    console.log("CREATED", created);


}



