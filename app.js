var inp = document.getElementById('inp');
var items = document.getElementById("ul");
var add = document.getElementById("priority")
var array = [];

function addItems(){
    if(array.push(inp.value)){
        inp.value = ''
    }
    else if(rray.push(add.value)){
        add.value = ''
    }
    rendering();
}
function rendering(){
    items.innerHTML = '';
    for(var i = 0; i<array.length; i++){
        items.innerHTML += `<li class = "style"> ${array[i]}
        <button onclick = "editing(${i})">EDIT</button>
        <button onclick = "deleting(${i})">DELETE</button>
        </li>`
    }
}

// array.push(inp.value);
// inp.value = '';

function editing(index){
    array[index]= prompt('Add some thing new')
    rendering()
}

function deleting(index){
    array.splice(index,1)
    rendering()
}
function deleteAllItems(){
    array = [];
    items.innerHTML = "";
}
function adding(){
    array.push(add.value);
    add.value = '';
    rendering()
}




