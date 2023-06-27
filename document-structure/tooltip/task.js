const tooltips = Array.from(document.getElementsByClassName('has-tooltip')); 
let tooltip = document.createElement('div'); 
tooltip.className = 'tooltip'; 
tooltip.innerHTML = 'Tooltip'; 


tooltips.forEach(elem => { 
    elem.addEventListener('click', event => { 
        event.preventDefault(); 
        let target = event.target; 

        if (target.title === tooltip.innerText) { 
            tooltip.classList.toggle('tooltip_active'); 
            return; 
        } 

        tooltip.innerText = target.title; 
        target.insertAdjacentElement('afterEnd', tooltip); 
        setPositionTooltip(elem); 
        tooltip.classList.add('tooltip_active'); 
    }); 
}); 

document.addEventListener('mousemove', event => { 
    if (tooltip.classList.contains('tooltip_active')) { 
        setPositionTooltip(tooltip.previousSibling); 
    } 
}); 

document.addEventListener('scroll', event => { 
    if (tooltip.classList.contains('tooltip_active')) { 
        setPositionTooltip(tooltip.previousSibling); 
    }
})
