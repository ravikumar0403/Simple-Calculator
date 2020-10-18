current = document.getElementById('current')
prev = document.getElementById('prev')

function getInput(value){
    if(value)
    current.innerText += value;
}

function delAll(){
    current.innerText = '';
    prev.innerText = '';
}

function del(){
    current.innerText = current.innerText.slice(0,current.innerText.length-1);
}

function getResult(current){
    try {
        result = eval(current.innerText);
        prev.innerText = current.innerText;
        current.innerText = result;   
      } catch(e) {
        current.innerText = 'ERROR'
      }
    }