console.log("Meow")


fetch("https://catfact.ninja/fact")
.then(response => response.json())
.then(result => {
    console.log(result)
    const catFactsDiv = document.getElementById("cat-facts")
    catFactsDiv.innerText = result.fact

    
})