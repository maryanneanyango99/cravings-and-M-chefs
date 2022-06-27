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
