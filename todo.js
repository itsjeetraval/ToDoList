

function getandupdate(){
    tit = document.getElementById('title').value
    desc = document.getElementById('description').value
    if(localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = []
        itemsJsonArray.push([tit,desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemsJsonArrayStr)
        itemsJsonArray.push([tit,desc])
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))   
    }
    update()
 
}

function update()
{
    if(localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = []
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemsJsonArrayStr) 
    }

    let tableBody = document.getElementById('tableBody')
    let str = ""
    itemsJsonArray.forEach((element,index)  => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="submit" class="btn btn-outline-danger" onclick="dele(${index})">Delete</button></td>
        </tr>
        `
    });

    tableBody.innerHTML = str
}

add = document.getElementById('add')
add.addEventListener("click",getandupdate)
update()

function dele(itemindex){
    itemsJsonArrayStr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemsJsonArrayStr)
    itemsJsonArray.splice(itemindex,1)
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray))   
    update()
}

function clearstore(){
    if(confirm("Are you sure?")){
        localStorage.clear()
        update()
    }
}


const searchfun = () => {
    let filter = document.getElementById('data').value.toLowerCase()
    let tr = document.getElementsByTagName('tr')
    
    for(let i=0;i<tr.length;i++)
    {
        let td = tr[i].getElementsByTagName('td')[0]
        
        if(td)
        {
            let text = td.textContent 
            if(text.toLowerCase().indexOf(filter) > -1){
                tr[i].style.display = ""
            }
            else{
                tr[i].style.display = "none"
            }
        }

    }

    // itemsJsonArray.forEach(data =>{
    //      if (data[0].toLowerCase().indexOf(filter) > -1)
    //      {
            
    //      }
    // } ) 
} 
