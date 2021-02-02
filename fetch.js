const postContainer = document.querySelector('#post-container')

// Function
const search = () => {
    // event.preventDefault();
    
    fetch(`http://taco-randomizer.herokuapp.com/random/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        // let posts = json.data; 
        let base_layer = json.base_layer.name
        let condiment = json.condiment.name
        let mixin = json.mixin.name


        // name of base_layer, condi, min, etc

        let divEl = createPost(base_layer, condiment, mixin);
        postContainer.appendChild(divEl);
    })

    
}


// function creates a div, then returns it, based on the passed in data
const createPost = (base_layer, condiment, mixin) => {

    let divEl = document.createElement('div')

    let h2El = document.createElement('h2');
    h2El.textContent = base_layer;

    let h3El = document.createElement('h3');
    h3El.textContent = condiment;

    let h4El = document.createElement('h4');
    h4El.textContent = mixin;


    divEl.appendChild(h2El)
    divEl.appendChild(h3El)
    divEl.appendChild(h4El)

    return divEl;
}
search()