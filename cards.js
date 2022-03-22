const FRUITS_CONTAINER_CARDS = document.getElementById('FRUITS_CONTAINER_CARDS');


async function cargarDataEnConsola(){
   
    const response = await fetch('http://localhost:3000/frutas');
    const json = await response.text();
    const data = JSON.parse(json);
    //console.log(data);
    return data

}

cargarDataEnConsola()

//console.log(FRUITS_CONTAINER_CARDS)



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
             
             <div class="modal" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
                
                </div>
              </div>
            </div>
        
   </div>`
    
 });
 }

 showCards()
