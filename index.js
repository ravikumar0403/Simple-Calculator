current = document.getElementById('current')
prev = document.getElementById('prev')

function getInput(value){
    if(current.innerText==0 || current.innerText == 'ERROR'){
      current.innerText = value;
    }else{
      current.innerText += value;
    }
}

function delAll(){
    current.innerText = '0';
    prev.innerText = '0';
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