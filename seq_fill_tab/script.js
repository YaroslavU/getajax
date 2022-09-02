let table = document.querySelector('#table');
let k = 1;

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement('tr');
	
        for (let i = 0; i < 5; i++) {
            let td = document.createElement('td');
            if ((k % 2) == 0) { 
                td.textContent = k;   
            } else {
                k++;
                td.textContent = k;
            }
            tr.appendChild(td);
            k++;
        }
        table.appendChild(tr);
    }
