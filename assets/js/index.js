<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>


var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=0a169b91a3c415ebc5b1314649c729c9')

.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})


document.addEventListener('DOMContentLoaded', function(){
    getCaterers();
})

function getCaterers(){
fetch('http://localhost:3000/caterers')
.then(res=>res.json())
.then(data=>{
    data.forEach(dataObject => {
        listEl = document.createElement('li');
        const ulList = document.getElementById("caterers-list");
        listEl.innerHTML = dataObject.name;
        ulList.appendChild(listEl);

        listEl.addEventListener('click', function(){
           const catererCost = document.getElementById('h2-1');
           const  catererLocation = document.getElementById('h2-2');
           const catererContact = document.getElementById('h2-3');

           catererCost .innerText = `Cost: ${dataObject.cost}`;
           catererLocation.innerText = `Location: ${dataObject.location}`;
           catererContact.innerText = `Contact: ${dataObject.contact}`;
        })
    });
})
}
document.addEventListener('DOMContentLoaded', function(){
    getProducts();
function getProducts(){
    fetch('http://localhost:3000/caterers')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(dataObject => {
            listEl = document.createElement('li');
            const ulList = document.getElementById("products-list");
            listEl.innerHTML = dataObject.name;
            ulList.appendChild(listEl);
    
            listEl.addEventListener('click', function(){
               const productName = document.getElementById('p1-a');
               const productHiringCost = document.getElementById('p1-b');
               const productDuration = document.getElementById('p1-c');
    
                productName.innerText = `name: ${dataObject.name}`;
                productHiringCost.innerText = `hiring: ${dataObject.hiringCost}`;
                productDuration.innerText = `duration: ${dataObject.contact}`;
            })
        });
    })
