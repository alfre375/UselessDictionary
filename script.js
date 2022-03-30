function search() {
    var searchThing = document.getElementById("search").value
    //searchThing = prompt("due to technical difficulties, we need to do it this way. Please enter your search in the box below.")
    /* Sets the "Definition of" */ document.getElementById("searchhere").innerText = searchThing
    /* Sets the result */ document.getElementById("result").innerText = searchThing + " means " + searchThing
}