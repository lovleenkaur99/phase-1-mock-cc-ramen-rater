// write your code here

fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramens => { 
    ramens.forEach(ramen => renderRamenDetails(ramen))
    showRamenDetail(ramens[0])
    console.log(ramens) 
})

function renderRamenDetails(ramen) { 
    const div = document.querySelector('#ramen-menu');
    const img = document.createElement('img');
    //const imageDetail = document.getElementById('#ramen-detail')
    
    img.src = ramen.image; //elementcreated.htmlsrc = parameter(ramen).json(image)
    
    //imageDetail.appendChild(div);
    div.appendChild(img);
    
    
    
    img.addEventListener('click', () => { 
        showRamenDetail(ramen)
    })

}




function showRamenDetail(ramenDetail) { 
    const name = document.querySelector('.name');
    name.textContent = ramenDetail.name
    
    const restaurant = document.querySelector('.restaurant');
    restaurant.textContent = ramenDetail.restaurant
    
    const image = document.querySelector('.detail-image');
    image.src = ramenDetail.image
    
   const rating = document.querySelector('#rating-display');
    rating.textContent = ramenDetail.rating
   
    const comment = document.querySelector('#comment-display');
    comment.textContent = ramenDetail.comment
}

function ramenForm(newRamen) { 
    const newName = document.getElementById('#new-name').value;
    const newRestaurant = document.getElementById('#new-restaurant').value;
    const newImage = document.getElementById('#new-image').value
    const newRating = document.getElementById('#new-rating').value
    const newComment = document.getElementById('#new-comment').value
    const submit= document.getElementsByName("submit")

    const newRamenForm = { 
        'name' : newName,
        'resturant' : newRestaurant,
        'image' : newImage,
        'rating' : newRating,
        'comment' : newComment,
    }




}