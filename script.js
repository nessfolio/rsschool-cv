const anchors = document.querySelectorAll("a[href*='#']")
// *= means contains

for (let anchor of anchors) {
    anchor.addEventListener('click', (event) => {
        event.preventDefault()

        const anchorID = anchor.getAttribute('href')
        const target = document.querySelector(anchorID)
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
}




const arrow = document.getElementById('arrow')
const padding = document.getElementById('padding')

let change = 'block'
arrow.onclick = function() {
    padding.style.display = change;
    if (change === 'block') change = 'none';
    else if (change === 'none') change = 'block';
}


window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        padding.style.display = 'none';
        change = 'block';
    }
})