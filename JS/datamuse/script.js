const wordInput = document.getElementById("wordInput");
const searchButton = document.getElementById("search-btn");
const resultsList = document.getElementById("results");

const result = () => {
    const word = wordInput.value.trim();

    if (!word) {
        alert("Enter a word!")
        return;
    }

    const url = `https://api.datamuse.com/words?sl=${word}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        resultsList.innerHTML = "";
        if (data.length === 0) 
            resultsList.innerHTML = "<li>No results found</li>";
        else {
            data.forEach(element => {
                const li = document.createElement("li")
                li.textContent = element.word;
                // <li>hello</li>
                resultsList.appendChild(li);
            });
        }
    })
    .catch(error => {
        console.log("Error: ", error);
    })



}


