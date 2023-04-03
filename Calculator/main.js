var numbers = document.getElementsByClassName('btn');
var input = document.getElementById('input');
var result = document.getElementById('result');
for (number of numbers) { 
    number.addEventListener('click', function () {
        input.innerHTML += this.value;
    });
}

function handleAC() { 
    input.innerHTML = '';
    result.innerHTML = '';
}

function equal() { 
    var res = input.innerHTML;
    var output = eval(res);
    result.innerHTML = output;
}

function del() { 
    var res = input.innerHTML;
    input.innerHTML = res.substring(0, res.length - 1)
}


// 12