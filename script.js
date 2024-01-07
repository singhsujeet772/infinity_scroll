// Unspalsh Api

const apiKey = 'ygBl6ks3uMyHfqrbtEPSmE4l4OuDcrT-1Nh3EnYYiOw';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API

const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photosArray = [];

function setAttributes(element , attributes){
    for (const key in attributes) {
        element.setAttribute(key , attributes[key])
    }
}

//Create Elements for links and photos , add to DOM
function displayPhotos(){
    //run function for each object in photosArray
    photosArray.forEach((photos)=>{
        //Create <a> to link to unsplash
        const item = document.createElement('a');
        // item.setAttribute('href',photos.links.html);
        // item.setAttribute('target','_blank');
        setAttributes(item ,{
            href : photos.links.html,
            target : '_blank',
        });
        //Create <img> for photo
        const img = document.createElement('img');
        // img.setAttribute('src',photos.urls.regular);
        // img.setAttribute('alt',photos.alt_description);
        // img.setAttribute('title',photos.alt_description);
        setAttributes(img ,{
            src : photos.urls.regular,
            alt : photos.alt_description,
            title : photos.alt_description,
        });
        //put <img> inside <a> and then put both inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        //Show Error Here
    }
}

getPhotos();