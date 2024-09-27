window.addEventListener('DOMContentLoaded', () => {
    /* const boxes = document.querySelectorAll('.box'); */
    const boxes = document.querySelectorAll('.panel'); /* get all the layout panel */
    const observer = new ResizeObserver(resizeCallback);

    function resizeCallback(boxes) {
      boxes.forEach(box => {
          
        // Get the custom trigger value from the 'stackpt' attribute of each panel
        const trigger1 = parseInt(box.target.getAttribute('stackpt1'), 10); 
        const trigger2 = parseInt(box.target.getAttribute('stackpt2'), 10); 
        /*  console.log( trigger1 ); 
            console.log( trigger2 ); */
          
        /* Apply the stack class if match trigger point */
        if (box.contentRect.width <= trigger1 ) {      
          box.target.classList.add('stack-pt1');
        } else {
          box.target.classList.remove('stack-pt1');
        }
          
        if (box.contentRect.width <= trigger2 ) {      
          box.target.classList.add('stack-pt2');
        } else {
          box.target.classList.remove('stack-pt2');
        }
          
      });
    }

    /* Link each layout with the function */
    boxes.forEach(box => {
        if (box instanceof HTMLElement) {
            observer.observe(box);
        }
    });
    
    /* end on load */
});



function updateattribute(field1,field2,layout){
    
    if (document.getElementById(field1).value == "" || document.getElementById(field1).value <= 0 ){
        document.getElementById(layout).removeAttribute('stackpt1');
    }else{
        document.getElementById(layout).setAttribute('stackpt1', document.getElementById(field1).value);
    }
    
    if (document.getElementById(field2).value == "" || document.getElementById(field2).value <= 0){
        document.getElementById(layout).removeAttribute('stackpt2');
    }else{
        document.getElementById(layout).setAttribute('stackpt2', document.getElementById(field2).value);
    }
    
}