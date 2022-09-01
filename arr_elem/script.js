let parent = document.querySelector('#parent');
let arr = [1, 2, 3, 4, 5];

    for (let elem of arr) {
        let p = document.createElement('p');
        p.id = elem;
        p.textContent = elem;
        parent.appendChild(p);
        p.setAttribute("onclick","inc(this)");
    }

    function inc(obj) {
        var y = obj.id;
        var elems = document.getElementsByTagName('p');
        elems[y - 1].innerText = elems[y - 1].innerText + '1';
    }