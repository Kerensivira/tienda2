mapboxgl.accessToken ='pk.eyJ1IjoiYWxleGFuZHJhMTgwMTAyIiwiYSI6ImNsMHlrbWMwMjBoc3Iza28wZ29qejB5NzUifQ.UZwBkfvvUS___HfHlBG-Pw'

const locationSearch = document.getElementById('input_location_search').value;
const mapBox_API_Url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/mexico.json?limit=4&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiYWxleGFuZHJhMTgwMTAyIiwiYSI6ImNsMHlrbWMwMjBoc3Iza28wZ29qejB5NzUifQ.UZwBkfvvUS___HfHlBG-Pw' 

//console.log(mapBox_API_Url)

function api () {
fetch(mapBox_API_Url) 
.then(res => res.json())
.then(data => console.log (data))
.catch (error => console.log(error))
}

api()
    
// }); => {console.log(data)})
//.catch(error => console.log(error))