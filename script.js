// Unspalsh Api

const apiKey = 'ygBl6ks3uMyHfqrbtEPSmE4l4OuDcrT-1Nh3EnYYiOw';
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    }catch(error){
        //Show Error Here
    }
}

getPhotos();