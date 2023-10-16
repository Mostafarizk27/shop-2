let title = document.getElementById('title')
let taxs = document.getElementById('taxs')
let ads = document.getElementById('ads')
let dicount = document.getElementById('dicount')
let count = document.getElementById('count')
let category = document.getElementById('category')
let create = document.getElementById('create')
let total = document.getElementById('total')
let price = document.getElementById('price')

// get total//////////////////////////////////////////////

    function getTotal()
    {
if (price.value !='') 
{
    let result = (+price.value + +taxs.value + +ads.value) - +dicount.value
    total.innerHTML = result
    total.style.backgroundColor = 'green'
} 
else {
    total.innerHTML = ''
    total.style.backgroundColor = 'red'}

    }


// create date//////////////////////////////////////////

    let datepro= [];

if(localStorage.prodect != null)
{
    datepro =JSON.parse(localStorage.prodect)

}else {dateprod =[]}



    create.onclick = function() {
        let newprodect = {
            title :title.value,      
            taxs :taxs.value,
            ads :ads.value,
            dicount :dicount.value,
            count :count ,
            category :category.value,
            total :total.innerHTML,
            price :price.innerHTML,
        }
        datepro.push(newprodect)
        localStorage.setItem('prodect',     JSON.stringify(datepro))
        
        clear()
        showdata() 
        }



        //clear data///////////////////////////////////////

        function clear() {
            title.value = ''
            ads.value = ''
            taxs.value = ''
            dicount.value = ''
            count.value = ''
            price.value = ''
            total.innerHTML = ''
            category.value = ''
        }

        //////read////////////////////
        function showdata() {
            let table = ''
            for (let i = 0; i <datepro.length; i++) {
                table +=`
                <tr>
                <td>${i}</td>
                <td>${datepro[i].title}</td>
                <td>${datepro[i].price}</td>
                <td>${datepro[i].taxs}</td>
                <td>${datepro[i].ads}</td>
                <td>${datepro[i].dicount}</td>
                <td>${datepro[i].total}</td>
                <td>${datepro[i].category}</td>
                <td><button  id="update" >update</button></td>
                <td><button onclick="deletedata(${i})" id="delete">delete</button></td>

            </tr>
                `
            }
            document.getElementById('tbody').innerHTML = table ;
        }
        showdata()

        ////////////delete data//////////

        function deletedata (i ) {
            datepro.splice(i,1 )
            localStorage.prodect =JSON.stringify(datepro)
            showdata()
        }