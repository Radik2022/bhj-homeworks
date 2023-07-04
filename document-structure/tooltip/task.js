const tooltips = Array.from(document.getElementsByClassName('has-tooltip')); 
let tooltip = document.createElement('div'); 
tooltip.className = 'tooltip'; 
tooltip.innerHTML = 'Tooltip'; 

 
function setPositionTooltip(elem) { 
    let tooltipWidth = tooltip.offsetWidth; 
    let tooltipHeight = tooltip.offsetHeight; 
    let elemRect = elem.getBoundingClientRect(); 
    let left = elemRect.left + (elem.offsetWidth / 2) - (tooltipWidth / 2); 
    let top = elemRect.top - tooltipHeight - 5; 

    if (left < 0) left = 0;  
    if (left + tooltipWidth > document.documentElement.clientWidth) left = document.documentElement.clientWidth - tooltipWidth;  
     
    tooltip.style.left = left + 'px'; 
    tooltip.style.top = top + 'px'; 
} 

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
});
