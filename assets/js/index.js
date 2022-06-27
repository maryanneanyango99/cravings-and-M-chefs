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
