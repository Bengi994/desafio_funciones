/* function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar); */

/*     function pintar(element, color = 'green') {
        element.style.backgroundColor = color;
    }
    
    const ele = document.getElementById("ele1");
    

    ele.addEventListener("click", () => pintar(ele, 'yellow'));
    
    pintar(ele);
 */

    function pintar(color = 'green') {
        ele.style.backgroundColor = color;
    }
    
    const ele = document.getElementById("ele1");
    

    ele.addEventListener("click", () => pintar('yellow'));
    
 
    pintar();
    