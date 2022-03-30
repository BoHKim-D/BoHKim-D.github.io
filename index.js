const header = document.querySelector('.header.container')

document.addEventListener('scroll',() => {
    let scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
})