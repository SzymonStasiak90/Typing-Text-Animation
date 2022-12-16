const data = [
            "Wake up, Neo...",
            "The Matrix has you...",
            "Fallow the white rabbit.",
            "knock, knock, Neo."
]
const div = document.querySelector('div');
const root = document.querySelector(':root');
const initialDataIndex = 0;
const writtingTime = 50;
const daleyTime = 2500;
const clearingTime = 15;
const caretBlinking = 700;

// initialize
writeText(initialDataIndex)


// Write text function
function writeText(index){
    let i = 0
    let interval = setInterval(()=>{
        div.innerHTML += data[index][i]
        if(i==data[index].length -1){
            i = 0
            clearInterval(interval)
            setTimeout(clearText, daleyTime)
        }else{
            i++;
            
        }
    }, writtingTime);
}

//Clear text function
let dataIndex = initialDataIndex+1
function clearText(){
    let interval = setInterval(() => {
        let divData = div.innerHTML
        if(divData !==''){
            div.innerHTML= divData.substring(0,divData.length-1)
            root.style.setProperty('--caret-display', 'inline-block')
        }else{
            clearInterval(interval)
            writeText(dataIndex);
            (dataIndex == data.length-1) ? dataIndex = 0 : dataIndex++
        }
    }, clearingTime);
}

// Blinking bar arrow function
setInterval(()=> {
    let prop = getComputedStyle(root).getPropertyValue('--caret-display')
    if(prop == 'none'){
        root.style.setProperty('--caret-display', 'inline-block')
    }else{
        root.style.setProperty('--caret-display', 'none')
    }
}, caretBlinking);