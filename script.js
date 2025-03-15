function generateColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let setIntrvl;

function setBackground(){


    setIntrvl = setInterval(bgChange,1200)
    
        
    function bgChange(){
        const clr = generateColor()
        document.body.style.backgroundColor = clr
        document.querySelector("#colors").innerHTML = clr
        document.querySelector('#start').setAttribute('disabled','');
    }

 
}

function stopChangingColor(){
    clearInterval(setIntrvl);
    setIntrvl = null;
    document.querySelector('#start').removeAttribute('disabled');   
}


document.querySelector('#start').addEventListener('click',setBackground)
document.querySelector('#stop').addEventListener('click',stopChangingColor)