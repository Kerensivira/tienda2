const FRUITS_CONTAINER_CARDS = document.getElementById('FRUITS_CONTAINER_CARDS');


async function cargarDataEnConsola(){
   
    const response = await fetch('http://localhost:3000/frutas');
    const json = await response.text();
    const data = JSON.parse(json);
    console.log(data);
    return data

}

cargarDataEnConsola()

console.log(FRUITS_CONTAINER_CARDS)



async function showCards() {

 const data = await cargarDataEnConsola()
 console.log(data)

 FRUITS_CONTAINER_CARDS.innerHTML = ''

   data.forEach(element => {const { product, imagen, precio, unidad_kilo } = element

       FRUITS_CONTAINER_CARDS.innerHTML += 	`<div class="FRUITS_CONTAINER_CARDS">
       <div class="card" style="width: 18rem;">
           <img src="${imagen}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${product}</h5>
             <h6 class="card-title">${precio}</h6>
             <p class="card-text">${unidad_kilo}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
         </div>
   </div>`
    
 });
 }

 showCards()
