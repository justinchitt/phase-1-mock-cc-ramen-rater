// write your code here

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(resp => resp.forEach(element => renderRamen(element)))


function renderRamen(element) {
    let img = document.createElement('img');
    img.id = element['id']
    img.src = element['image']
    document.getElementById("ramen-menu").appendChild(img)
    img.addEventListener('click', function (){
        document.getElementById('rating-display').textContent = element.rating
        document.getElementById('comment-display').textContent = element.comment
        let placeHold = document.querySelector('#ramen-detail img')
        placeHold.src = element.image
        let name = document.querySelector('#ramen-detail h2')
        name.textContent = element.name
        let restaurant = document.querySelector('#ramen-detail h3')
        restaurant.textContent = element.restaurant
    })
}

const form = document.getElementById("new-ramen")
const nameInput = document.getElementById('new-name')
const restaurantInput = document.getElementById('new-restaurant')
const imageInput = document.getElementById('new-image')
const ratingInput = document.getElementById('new-rating')
const commentInput = document.getElementById('new-comment')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    renderNew()
    form.reset()
})

console.log(form)

function renderNew() {
    let img = document.createElement('img');
    img.src = `${imageInput.value}`
    document.getElementById("ramen-menu").appendChild(img)
    let ratingOne = `${ratingInput.value}`
    let commentOne = `${commentInput.value}`
    let nameOne = `${nameInput.value}`
    let imgOne = `${imageInput.value}`
    let rest = `${restaurantInput.value}`
    img.addEventListener('click', function (){
        document.getElementById('rating-display').textContent = ratingOne
        document.getElementById('comment-display').textContent = commentOne
        let placeHold = document.querySelector('#ramen-detail img')
        placeHold.src = imgOne
        let name = document.querySelector('#ramen-detail h2')
        name.textContent = nameOne
        let restaurant = document.querySelector('#ramen-detail h3')
        restaurant.textContent = rest
        console.log(imageInput.value)
    })

}
