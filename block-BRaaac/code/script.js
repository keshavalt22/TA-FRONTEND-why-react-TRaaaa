let input = document.querySelector(`input[type="text"]`); 
let rootElm = document.querySelector(".movie_list");

let allMovies = [
    {
        name: 'Forest Gump',
        watched: false
    },
    {
        name: 'Inception',
        watched: false
    }
];

input.addEventListener("keyup", (event) => {
    if(event.keyCode === 13){
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = "";
        createMovieUI(allMovies, rootElm);
    }
});

function deleteMovie(event){
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI(allMovies, rootElm);
}

function handleChange(event){
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI(allMovies, rootElm);
}

function elm(type, attr = {}, ...childern){
    let element = document.createElement(type);
    for(let key in attr){
        if(key.startsWith('data-')){
            element.setAttribute(key, attr[key]);
        } else{
            element[key] = attr[key];
        }
    }
    childern.forEach(child => {
        if(typeof child === "object") {
            element.append(child);
        }
        if(typeof child === "string") {
            let node = document.createTextNode(child);
            element.append(node);
        }
    })
    return element;
}   

function createMovieUI(data, root){
    rootElm.innerHTML = "";
    allMovies.forEach((movie, i) =>{
        let li = elm(
            "li",
            {}, elm("button", {
                id : i
            }, movie.watched? "Watched": "To Watch"), 
            elm("label", {
                for : i
            }, movie.name), 
            elm("span", {
                "data-id": i
            }, "x")
            );
        // button.addEventListener("click", handleChange);
        // span.addEventListener("click", deleteMovie);
        rootElm.append(li);
    })
}

createMovieUI();