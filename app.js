import RouterHandler from "./router.js";

window.onhashchange = () => {
    console.log('page changed!')
    setActiveLink()
}

function setActiveLink(){
    const links = document.querySelectorAll('.header-link');
    console.log(links)

    links.forEach(link => {
        const linkPath = link.getAttribute('href');
        console.log('linkPath: ', linkPath);
        const currentPath = window.location.hash;
        console.log('currentPath: ', currentPath);
        
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active')
        }
        
    })
}

class App {
    constructor() {
        console.log('App entry point!');
        new RouterHandler();
        
    }
}

new App();