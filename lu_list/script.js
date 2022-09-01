let elem = document.querySelector('#elem');
let arr = [1, 2, 3, 4, 5];

for(var i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    li.id = arr[i];
    elem.appendChild(li);
    li.setAttribute("onclick","inc(this); this.onclick=null;");
}

function inc(obj) {
    var y = obj.id;
    var lis = document.getElementsByTagName('li');
    lis[y - 1].innerText = lis[y - 1].innerText + '!';
}
// for (let val of arr) {
//     let li = document.createElement('li');
//     li.textContent = val;
//     elem.appendChild(li);

// }