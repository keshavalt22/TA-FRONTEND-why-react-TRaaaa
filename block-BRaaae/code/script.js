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

// function elm(type, attr = {}, ...childern){
//     let element = document.createElement(type);
//     for(let key in attr){
//         if(key.startsWith('data-')){
//             element.setAttribute(key, attr[key]);
//         } else if(key.startsWith('on')){
//             let eventType = key.replace('on', '').toLowerCase();
//             element.addEventListener(eventType, attr[key]);
//         } else{
//             element[key] = attr[key];
//         }
//     }
//     childern.forEach(child => {
//         if(typeof child === "object") {
//             element.append(child);
//         }
//         if(typeof child === "string") {
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     })
//     return element;
// }   

function createMovieUI(data, root){
    let movieUI = allMovies.map((movie, i) =>{
        let li = React.createElement(
            "li",
            {}, React.createElement("button", {
                id : i,
                onClick: handleChange
            }, movie.watched? "Watched": "To Watch"), 
            React.createElement("label", {
                for : i
            }, movie.name), 
            React.createElement("span", {
                "data-id": i,
                onClick: deleteMovie
            }, "x")
        );
        return li;
    });
    ReactDOM.render(movieUI, rootElm);
}

createMovieUI();